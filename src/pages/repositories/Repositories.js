import React from 'react';

import { Container } from 'react-awesome-styled-grid';
import { ListRepositories } from 'components/list-repositories';

const REPOSITORIES = [
  {
    name: 'Front-end Brasil',
    description: 'O mundo frontender dentro do Github beer.',
    slug: 'frontendbr',
    image: '16963863'
  },
  {
    name: 'Android Dev BR',
    description: 'Comunidade de desenvolvedores Android brasileiros.',
    slug: 'androiddevbr',
    image: '13825651'
  },
  {
    name: 'CocoaHeads Brasil',
    description: 'Repositório Público do CocoaHeads Brasil.',
    slug: 'CocoaHeadsBrasil',
    image: '7914270'
  }
];

function RepositoriesPage() {
  return (
    <Container>
      <ListRepositories data={REPOSITORIES} />
    </Container>
  );
}

export default RepositoriesPage;
