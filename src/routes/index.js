import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Router, Route, Switch } from 'react-router-dom';

import { RepositoriesPage } from 'pages/repositories';

function Routes({ history }) {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={RepositoriesPage} />
          {/* <Route exact path="/:user/:repo/:issue?" component={JobsPage} /> */}
        </Switch>
      </Fragment>
    </Router>
  );
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
