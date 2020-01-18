import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Skeleton({ width, height, rounded, margin }) {
  return (
    <S.StyledSkeleton
      width={width}
      height={height}
      margin={margin}
      rounded={rounded}
    />
  );
}

Skeleton.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  rounded: PropTypes.bool
};

Skeleton.defaultProps = {
  rounded: false,
  margin: 0
};

export default Skeleton;
