import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'components/image';

import * as S from './styled';

const Card = ({ to, image, title, description, labels, onClick, as }) => (
  <S.Card to={to} as={as}>
    {image && (
      <S.Image>
        <Image src={image} alt={title} />
      </S.Image>
    )}

    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Content>
  </S.Card>
);

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  labels: PropTypes.array,
  onClick: PropTypes.func
};

Card.defaultProps = {
  onClick: () => {}
};

export default Card;
