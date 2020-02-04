import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_ISSUES } from 'graphql/repositories';

import { Container, Row, Col } from 'react-awesome-styled-grid';
import { ListIssues, ListIssuesLoading } from 'components/list-issues';

import { useInfiniteScroll } from 'react-infinite-scroll-hook';
function RepositoryPage({ match }) {
  const [isFetching, setIsFetching] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);

  const { loading, error, data, fetchMore } = useQuery(QUERY_ISSUES, {
    variables: {
      slug: match.params.slug
    },
    notifyOnNetworkStatusChange: false
  });

  const handleLoadMore = (fetchMore, issues) => {
    return fetchMore({
      variables: {
        after: issues.pageInfo.endCursor
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        const newEdges = fetchMoreResult.repository.issues.edges;
        const pageInfo = fetchMoreResult.repository.issues.pageInfo;

        setHasNextPage(pageInfo.hasNextPage);

        return {
          repository: {
            ...prev,
            __typename: fetchMoreResult.repository.__typename,
            issues: {
              edges: [...prev.repository.issues.edges, ...newEdges],
              __typename: fetchMoreResult.repository.issues.__typename,
              pageInfo
            }
          }
        };
      }
    });
  };

  const ListRef = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: () => handleLoadMore(fetchMore, data.repository.issues)
  });

  if (error) return <p>error</p>;

  return (
    <Container>
      <Row>
        <Col xs={12} lg={8}>
          {loading ? (
            <ListIssuesLoading />
          ) : (
            <div ref={ListRef}>
              <ListIssues data={data.repository.issues.edges} />
            </div>
          )}
        </Col>

        <Col xs={12} lg={4}>
          <div>
            <button
              onClick={() => handleLoadMore(fetchMore, data.repository.issues)}
            >
              get more
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

RepositoryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object
  }).isRequired
};

export default RepositoryPage;
