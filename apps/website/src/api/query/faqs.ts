import { inject, watch, Ref } from 'vue';
import FaqsGql from './faqs.gql';
import { cast } from '../helpers';
import { graphql } from '../client';
import { Faq, parseFaqEntities } from './fragment';
import type { ApolloQueryResult } from '@apollo/client/core';
import type codegen from '../typings';

/**
 * Composable to handle the FAQs Query.
 */
export function useFaqsQuery() {
  /**
   * Found created by user FAQs.
   */
  let faqs: Faq[] = $shallowRef(null);

  /**
   * Current active user language.
   */
  const language: string = $(inject('language'));

  /**
   * Watch the language to reload Query.
   */
  watch($$(language), execFaqsQuery);

  /**
   * Handler to execute query and parse.
   * @returns Operation execution status.
   */
  function execFaqsQuery(): Promise<void> {
    return graphql
      .query({ query: FaqsGql, variables: { locale: language } })
      .then(({ data }: ApolloQueryResult<codegen.Query>): void => {
        faqs = parseFaqEntities(data.faqs);
      });
  }

  // Return functionality of composable.
  return { faqs: cast<Ref<typeof faqs>>($$(faqs)), execFaqsQuery };
}
