import Config from './config.gql';
import { graphql } from '../client';
// prettier-ignore
import { Lang, Nav, Page, parseDynamicLink,
  parseLangEntities, parseNavEntities,
  parsePageEntities } from './fragment';
import { cast, getAttributes, getData } from '../helpers';
import type { Ref } from 'vue';
import type { ApolloQueryResult } from '@apollo/client/core';
import type { LinkRoute, LinkSocial } from '#/api/query/fragment';
import type codegen from '../typings';

// Type for footer config.
export type Footer = {
  links?: (LinkRoute | LinkSocial)[];
};

/**
 * Found navigations items.
 */
let navs: Nav[] = $shallowRef([]);

/**
 * Found available languages.
 */
let langs: Lang[] = $shallowRef([]);

/**
 * Found created dynamic pages.
 */
let pages: Page[] = $shallowRef([]);

/**
 * Defined by user dynamic footer.
 */
let footer: Footer = $shallowRef();

/**
 * Parse the footer data from server.
 * @param raw GraphQL Entity.
 */
function parseFooter(raw: codegen.FooterEntityResponse): Footer {
  return { links: getAttributes(getData(raw))?.links?.map(parseDynamicLink) };
}

/**
 * Composable to handle the Config Query.
 */
export function useConfigQuery() {
  /**
   * Handler to execute query and parse.
   * @returns Operation execution status.
   */
  function execConfigQuery(locale: string): Promise<void> {
    return graphql
      .query({ query: Config, variables: { locale } })
      .then(({ data }: ApolloQueryResult<codegen.Query>): void => {
        navs = parseNavEntities(data.navs);
        langs = parseLangEntities(data.langs);
        pages = parsePageEntities(data.pages);
        footer = parseFooter(data.footer);
      });
  }

  // Return functionality of composable.
  return {
    navs: cast<Ref<typeof navs>>($$(navs)),
    langs: cast<Ref<typeof langs>>($$(langs)),
    pages: cast<Ref<typeof pages>>($$(pages)),
    footer: cast<Ref<typeof footer>>($$(footer)),
    execConfigQuery
  };
}
