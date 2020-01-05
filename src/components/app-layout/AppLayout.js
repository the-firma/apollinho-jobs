import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { standard, GlobalStyle } from 'styles';

const AppLayout = ({ children }) => (
  <ThemeProvider theme={standard}>
    <GlobalStyle theme={standard} />

    <section>{children}</section>
  </ThemeProvider>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppLayout;
