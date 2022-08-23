import MediasGql from './medias.gql';
import { cast } from '../helpers';
import { graphql } from '../client';
import { Media, parseMediaEntities } from './fragment';
import type { Ref } from 'vue';
import type { ApolloQueryResult } from '@apollo/client/core';
import type codegen from '../typings';

/**
 * Composable to handle the Medias Query.
 */
export function useMediasQuery() {
  /**
   * Found created by user Medias.
   */
  let medias: Media[] = $shallowRef(null);

  /**
   * Handler to execute query and parse.
   * @returns Operation execution status.
   */
  function execMediasQuery(): Promise<void> {
    return graphql
      .query({ query: MediasGql, variables: {} })
      .then(({ data }: ApolloQueryResult<codegen.Query>): void => {
        medias = parseMediaEntities(data.medias);
      });
  }

  // Return functionality of composable.
  return { medias: cast<Ref<typeof medias>>($$(medias)), execMediasQuery };
}
