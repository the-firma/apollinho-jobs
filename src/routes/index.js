import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Router, Route, Switch } from 'react-router-dom';

import { RepositoriesPage } from 'pages/repositories';
import { RepositoryPage } from 'pages/repository';

function Routes({ history }) {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={RepositoriesPage} />
          <Route exact path="/:slug" component={RepositoryPage} />
        </Switch>
      </Fragment>
    </Router>
  );
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
