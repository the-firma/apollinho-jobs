import styled, { css } from 'styled-components';

export const StyledSkeleton = styled.div(
  ({ theme, width, height, rounded, margin }) => `
    width: ${width};
    height: ${height};

    margin: ${margin};

    ${
      rounded
        ? css`
            border-radius: 50%;
          `
        : css`
            border-radius: 4px;
          `
    }

    background: linear-gradient(90deg, #f0f0f0 25%, #f9f9f9 37%, #f0f0f0 63%);
    background-size: 400% 100%;

    animation: loading 1500ms ease infinite;

    @keyframes loading {
      0% {
          background-position: 100% 50%;
      }

      100% {
          background-position: 0 50%;
      }
    }
  `
);
