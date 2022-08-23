import { inject, watch, Ref } from 'vue';
import DocsGql from './docs.gql';
import { cast } from '../helpers';
import { graphql } from '../client';
import { Doc, parseDocEntities } from './fragment';
import type { ApolloQueryResult } from '@apollo/client/core';
import type codegen from '../typings';

/**
 * Composable to handle the Docs Query.
 */
export function useDocsQuery() {
  /**
   * Found created by user Docs.
   */
  let docs: Doc[] = $shallowRef(null);

  /**
   * Current active user language.
   */
  const language: string = $(inject('language'));

  /**
   * Watch the language to reload Query.
   */
  watch($$(language), execDocsQuery);

  /**
   * Handler to execute query and parse.
   * @returns Operation execution status.
   */
  function execDocsQuery(): Promise<void> {
    return graphql
      .query({ query: DocsGql, variables: { locale: language } })
      .then(({ data }: ApolloQueryResult<codegen.Query>): void => {
        docs = parseDocEntities(data.docs);
      });
  }

  // Return functionality of composable.
  return { docs: cast<Ref<typeof docs>>($$(docs)), execDocsQuery };
}
