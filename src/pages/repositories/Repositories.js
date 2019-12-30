import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const REPOSITORIE = gql`
  {
    repository(owner: "frontendbr", name: "vagas") {
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

function RepositoriesPage() {
  const { loading, error, data } = useQuery(REPOSITORIE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.repository.issues.edges.map(({ node: { title, url } }, index) => (
        <p key={`${title}-${index}`}>{title}</p>
      ))}
    </div>
  );
}

export default RepositoriesPage;
