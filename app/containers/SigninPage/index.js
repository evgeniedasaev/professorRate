/*
 * SigninPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { createUser } from './actions';

import Form from './Form';

export class SigninPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    onSubmit = (userData) => {
        this.props.createUser(userData);
    }

    render() {
        const { loading, error } = this.props;

        return (
            <main className="o-container o-container--large u-pillar-box--small">
                <h2 className="c-heading c-heading--small">Регистрация</h2>
                <Form onSubmit={this.onSubmit} />
            </main>
        );
    }
}

SigninPage.propTypes = {
    loading: React.PropTypes.bool,
    error: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
    ]),
    createUser: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
    return {
        createUser: (userData) => dispatch(createUser(userData)),
    };
}

const mapStateToProps = createStructuredSelector({
    loading: makeSelectLoading(),
    error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);
