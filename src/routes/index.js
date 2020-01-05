import React from 'react';
import PropTypes from 'prop-types';

import { Router, Route, Switch } from 'react-router-dom';

import { AppLayout } from 'components/app-layout';

import { RepositoriesPage } from 'pages/repositories';
import { RepositoryPage } from 'pages/repository';

function Routes({ history }) {
  return (
    <Router history={history}>
      <AppLayout>
        <Switch>
          <Route exact path="/" component={RepositoriesPage} />
          <Route exact path="/:slug" component={RepositoryPage} />
        </Switch>
      </AppLayout>
    </Router>
  );
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
