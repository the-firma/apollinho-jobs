import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { standard, GlobalStyle } from 'styles';

import { Layout } from './styled';

const AppLayout = ({ children }) => (
  <ThemeProvider theme={standard}>
    <GlobalStyle theme={standard} />

    <Layout>{children}</Layout>
  </ThemeProvider>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppLayout;
