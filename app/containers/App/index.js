/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';
import withProgressBar from 'components/ProgressBar';
import Errors from 'components/Errors';

import { makeSelectCurrentUser, makeSelectLoading, makeSelectError } from './selectors';
import { logout } from './actions';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, loading, error, user, logout } = this.props;
    const childrenWithProps = React.Children.map(children,
      (child) => React.cloneElement(child, {
        user,
      })
    );

    return (
      <div>
        <Helmet
          titleTemplate="%s - Оцени профессора"
          defaultTitle="Оцени профессора"
          meta={[
            { name: 'description', content: 'Приложение Оцени профессора' },
          ]}
        />
        <Header user={user} logout={logout} />
        <main className="o-container o-container--large u-pillar-box--small u-letter-box--medium">
          <Errors errors={error} />
          {childrenWithProps}
        </main>
      </div>
    );
  }
};

App.propTypes = {
  children: React.PropTypes.node,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  user: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      localStorage.removeItem('currentUser');
      
      dispatch(logout());
    }
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  user: makeSelectCurrentUser(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(withProgressBar(App));
