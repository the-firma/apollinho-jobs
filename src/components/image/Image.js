import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Skeleton } from 'components/skeleton';

export function Image({ src, alt, isLoading }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = document.createElement('img');

    img.onload = () => setLoaded(true);
    img.src = src;
  });

  return loaded ? (
    <img src={src} alt={alt} />
  ) : (
    <Skeleton width="100%" height="100%" />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Image.defaultProps = {
  alt: ''
};

export default Image;
