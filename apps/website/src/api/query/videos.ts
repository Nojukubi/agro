import VideosGql from './videos.gql';
import { cast } from '../helpers';
import { graphql } from '../client';
import { Video, parsVideoEntities } from './fragment';
import type { Ref } from 'vue';
import type { ApolloQueryResult } from '@apollo/client/core';
import type codegen from '../typings';

/**
 * Composable to handle the Videos Query.
 */
export function useVideosQuery() {
  /**
   * Found created by user Videos.
   */
  let videos: Video[] = $shallowRef(null);

  /**
   * Handler to execute query and parse.
   * @returns Operation execution status.
   */
  function execVideosQuery(): Promise<void> {
    return graphql
      .query({ query: VideosGql, variables: {} })
      .then(({ data }: ApolloQueryResult<codegen.Query>): void => {
        videos = parsVideoEntities(data.videos);
      });
  }

  // Return functionality of composable.
  return { videos: cast<Ref<typeof videos>>($$(videos)), execVideosQuery };
}
