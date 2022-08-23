import { inject, watch, Ref } from 'vue';
import BlogGql from './blog.gql';
import { cast } from '../helpers';
import { graphql } from '../client';
import { Post, parsePostEntities } from './fragment';
import type { ApolloQueryResult } from '@apollo/client/core';
import type codegen from '../typings';

/**
 * Composable to handle the Blog Query.
 */
export function useBlogQuery() {
  /**
   * Found posts by defined type.
   */
  let posts: Post[] = $shallowRef([]);

  /**
   * Last args used to exec Query.
   */
  let args: [string?] = $shallowRef([]);

  /**
   * Current active user language.
   */
  const language: string = $(inject('language'));

  /**
   * Watch the language to reload Query.
   */
  watch($$(language), (): void => {
    execBlogQuery(...args).catch(console.log);
  });

  /**
   * Handler to execute query and parse.
   * @returns Operation execution status.
   */
  function execBlogQuery(type: string): Promise<void> {
    args = [type];
    return graphql
      .query({ query: BlogGql, variables: { type, locale: language } })
      .then(({ data }: ApolloQueryResult<codegen.Query>): void => {
        posts = parsePostEntities(data.posts);
      });
  }

  // Return functionality of composable.
  return { posts: cast<Ref<typeof posts>>($$(posts)), execBlogQuery };
}
