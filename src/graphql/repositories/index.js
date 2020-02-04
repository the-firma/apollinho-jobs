import { gql } from 'apollo-boost';

export const QUERY_ISSUES = gql`
  query issues($after: String, $slug: String!) {
    repository(owner: $slug, name: "vagas") {
      __typename
      issues(
        after: $after
        first: 5
        states: OPEN
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        edges {
          node {
            title
            url
          }
        }
        __typename
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
