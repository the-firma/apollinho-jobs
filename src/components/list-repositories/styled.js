import styled from 'styled-components';
import { Row, Col } from 'react-awesome-styled-grid';

export const List = styled(Row)(
  ({ theme }) => `
    position: relative
  `
);

export const Item = styled(Col)(
  ({ theme }) => `
    display: block;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 32px;
    }
  `
);
