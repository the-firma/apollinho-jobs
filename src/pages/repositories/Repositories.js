import React from 'react';
import { Link } from 'react-router-dom';

const REPOSITORIES = [
  {
    name: 'Front-end Brasil',
    description: 'O mundo frontender dentro do Github beer',
    slug: 'frontendbr'
  },
  {
    name: 'Android Dev BR',
    description:
      'Comunidade de desenvolvedores Android brasileiros. Junte-se a nós! :)',
    slug: 'androiddevbr'
  },
  {
    name: 'CocoaHeads Brasil',
    description: 'Repositório Público do CocoaHeads Brasil',
    slug: 'CocoaHeadsBrasil'
  }
];

function RepositoriesPage() {
  return (
    <div>
      {REPOSITORIES.map(({ name, description, slug }, index) => (
        <Link to={slug} key={name}>
          {name}
        </Link>
      ))}
    </div>
  );
}

export default RepositoriesPage;
