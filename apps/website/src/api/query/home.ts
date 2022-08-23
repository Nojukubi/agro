import { inject, watch, Ref } from 'vue';
import HomeGql from './home.gql';
import { graphql } from '../client';
import { cast, getAttributes, getData } from '../helpers';
// prettier-ignore
import { Block, parseBlockWrapper, Post,
  parsePostEntities } from './fragment';
import type { ApolloQueryResult } from '@apollo/client/core';
import type codegen from '../typings';

/**
 * Composable to handle the Home.
 */
export function useHomeQuery() {
  /**
   * Configured main banner.
   */
  let banner: Block = $shallowRef(null);

  /**
   * Configured other banners.
   */
  let other: Block[] = $shallowRef(null);

  /**
   * Configured highlight blocks.
   */
  let highlights: Block[] = $shallowRef(null);

  /**
   * Created posts with News tag.
   */
  let news: Post[] = $shallowRef([]);

  /**
   * Created posts with Agti tag.
   */
  let agti: Post[] = $shallowRef([]);

  /**
   * Determine whether query is ready.
   */
  let isQueryReady: boolean = $shallowRef(false);

  /**
   * Current active user language.
   */
  const language: string = $(inject('language'));

  /**
   * Watch the lang to reload Query.
   */
  watch($$(language), execHomeQuery);

  /**
   * Handler to execute query and parse.
   * @returns Operation execution status.
   */
  function execHomeQuery(): Promise<void> {
    return graphql
      .query({ query: HomeGql, variables: { locale: language } })
      .then(({ data }: ApolloQueryResult<codegen.Query & any>): void => {
        // Retrieve the page data from response.
        const page: codegen.Home = getAttributes(getData(data.home));
        // Parse the blog posts with tag News.
        news = parsePostEntities(data.news);
        // Parse the blog posts with tag Agti.
        agti = parsePostEntities(data.agti);
        // Parse the home page main banner.
        banner = parseBlockWrapper(page.main.block);
        // Parse the banners attached to other section.
        other = page.other?.map(({ block }: codegen.ComponentRelBlock): Block => {
          return parseBlockWrapper(block);
        });
        // Parse the banners attached to other highlight.
        highlights = page.highlight?.map(({ block }: codegen.ComponentRelBlock): Block => {
          return parseBlockWrapper(block);
        });
        // Determine whether Query is ready and can be used.
        isQueryReady = true;
      });
  }

  // Return functionality of composable.
  return {
    execHomeQuery,
    banner: cast<Ref<typeof banner>>($$(banner)),
    other: cast<Ref<typeof other>>($$(other)),
    news: cast<Ref<typeof news>>($$(news)),
    agti: cast<Ref<typeof agti>>($$(agti)),
    highlights: cast<Ref<typeof highlights>>($$(highlights)),
    isQueryReady: cast<Ref<typeof isQueryReady>>($$(isQueryReady))
  };
}
