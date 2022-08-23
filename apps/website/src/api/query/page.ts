import PageGql from './page.gql';
import { cast } from '../helpers';
import { graphql } from '../client';
import { Page, parsePageWrapper } from './fragment';
import type { Ref } from 'vue';
import type { ApolloQueryResult } from '@apollo/client/core';
import type codegen from '../typings';

/**
 * Composable to handle the Page Query.
 */
export function usePageQuery() {
  /**
   * Created page retrieved by ID.
   */
  let page: Page = $shallowRef();

  /**
   * Handler to execute query and parse.
   * @param id Internal page ID.
   * @returns Operation execution status.
   */
  function execPageQuery(id: string): Promise<void> {
    return graphql
      .query({ query: PageGql, variables: { id } })
      .then(({ data }: ApolloQueryResult<codegen.Query>): void => {
        page = parsePageWrapper(data.page);
      });
  }

  // Return functionality of composable.
  return { page: cast<Ref<typeof page>>($$(page)), execPageQuery };
}
