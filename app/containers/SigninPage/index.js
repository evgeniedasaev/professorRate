/*
 * SigninPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { createUser } from './actions';

import Form from './Form';

export class SigninPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    onSubmit = (userData) => {
        this.props.createUser(userData);
    }

    componentDidMount() {
        const { user } = this.props;
        if (user) {
            browserHistory.push('/');
        }
    }

    render() {
        return (
            <div>
                <h2 className="c-heading c-heading--small u-letter-box--none">Регистрация</h2>
                <Form onSubmit={this.onSubmit} />
            </div>
        );
    }
}

SigninPage.propTypes = {
    createUser: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
    return {
        createUser: (userData) => dispatch(createUser(userData)),
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(SigninPage);
