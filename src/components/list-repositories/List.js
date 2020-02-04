import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Card } from 'components/card';

import * as S from './styled';

function ListRepositories({ data }) {
  return (
    <Fragment>
      <S.List>
        {data.map(({ name, description, slug, image }) => (
          <S.Item key={name} sm={12} md={6} lg={4}>
            <Card
              as={Link}
              to={slug}
              image={`https://avatars2.githubusercontent.com/u/${image}?s=200&v=4`}
              title={name}
              description={description}
            />
          </S.Item>
        ))}
      </S.List>
    </Fragment>
  );
}

ListRepositories.propTypes = {
  data: PropTypes.array.isRequired
};

export default ListRepositories;
