/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { logIn } from './actions';

import Form from './Form';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    onSubmit = (login, password) => {
        this.props.logIn(login, password);
    }

    componentWillUpdate(nextProps, nextState) {
        const { user } = nextProps;

        if (user) {
            browserHistory.push('/');
        }
    }

    render() {
        return (
            <div>
                <h2 className="c-heading c-heading--small u-letter-box--none">Войти</h2>
                <Form onSubmit={this.onSubmit} />
            </div>
        );
    }
}

LoginPage.propTypes = {
    logIn: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
    return {
        logIn: (login, password) => dispatch(logIn(login, password)),
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(LoginPage);
