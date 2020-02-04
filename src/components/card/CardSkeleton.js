import React from 'react';

import { Skeleton } from 'components/skeleton';

import * as S from './styled';

function CardSkeleton() {
  return (
    <S.Card>
      <S.Content>
        <Skeleton width="100px" height="17px" margin={`0 0 8px 0`} />
        <Skeleton width="200px" height="17px" />
      </S.Content>
    </S.Card>
  );
}

export default CardSkeleton;
