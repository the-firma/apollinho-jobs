import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'components/card';

import { formatters } from 'utils/formatters';

import * as S from './styled';

function ListIssues({ data }) {
  return (
    <S.List>
      {data.map(({ node: { title } }) => (
        <S.Item key={title} sm={12}>
          <Card
            title={formatters.getIssueName(title).cleanString}
            description={formatters.getIssueName(title).matches[0]}
          />
        </S.Item>
      ))}
    </S.List>
  );
}

ListIssues.propTypes = {
  data: PropTypes.array.isRequired
};

ListIssues.defaultProps = {
  data: []
};

export default ListIssues;
