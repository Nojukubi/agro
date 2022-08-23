import PostGql from './post.gql';
import { cast } from '../helpers';
import { graphql } from '../client';
import { Post, parsePostWrapper } from './fragment';
import type { Ref } from 'vue';
import type { ApolloQueryResult } from '@apollo/client/core';
import type codegen from '../typings';

/**
 * Composable to handle the Post Query.
 */
export function usePostQuery() {
  /**
   * Created post retrieved by ID.
   */
  let post: Post = $shallowRef(null);

  /**
   * Handler to execute query and parse response.
   * @param id Internal post ID.
   * @returns Operation execution status.
   */
  function execPostQuery(id: string): Promise<void> {
    return graphql
      .query({ query: PostGql, variables: { id } })
      .then(({ data }: ApolloQueryResult<codegen.Query>): void => {
        post = parsePostWrapper(data.post);
      });
  }

  // Return functionality of composable.
  return { post: cast<Ref<typeof post>>($$(post)), execPostQuery };
}
