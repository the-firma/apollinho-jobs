import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  width: 100%;
`;

export const Item = styled.li`
  display: block;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 32px;
  }
`;
