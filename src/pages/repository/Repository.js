import React from 'react';
import PropTypes from 'prop-types';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const QUERY = gql`
  query issues($slug: String!) {
    repository(owner: $slug, name: "vagas") {
      issues(last: 20, states: OPEN) {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  }
`;

function RepositoryPage({ match }) {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { slug: match.params.slug }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data.repository);

  return (
    <div>
      {data.repository.issues.edges.map(({ node: { title } }, index) => (
        <p key={`${title}-${index}`}>{title}</p>
      ))}
    </div>
  );
}

RepositoryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object
  })
};

export default RepositoryPage;
