import React from 'react';

import { CardSkeleton } from 'components/card';

import * as S from './styled';

function ListIssuesLoading() {
  return (
    <S.List>
      {Array(5)
        .fill()
        .map((item, index) => (
          <S.Item key={index} sm={12}>
            <CardSkeleton />
          </S.Item>
        ))}
    </S.List>
  );
}

export default ListIssuesLoading;
