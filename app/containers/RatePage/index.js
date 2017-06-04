/*
 * RatePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';

import { sendRate } from './actions';
import { loadProfessor } from '../ProfessorPage/actions';
import { getPrefessorId, makeProfessor } from '../ProfessorPage/selectors';

import Form from './Form';

export class RatePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    componentDidMount() {
        if (this.props.professorId) {
            this.props.loadProfessor(this.props.professorId);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        const { user } = nextProps;

        if (!user) {
            browserHistory.push('/');
        }

        const { professor, shouldRedirect } = nextProps;

        if (shouldRedirect) {
            browserHistory.push('/professor/' + professor.id);
        }
    }

    onSubmit = (rateData, author, user) => {
        this.props.sendRate(rateData, author, user);
    }

    render() {
        const {professor, user} = this.props;

        return (
            <div>
                <h2 className="c-heading c-heading--small u-letter-box--none">Оставить отзыв</h2>
                <h3 className="c-heading">{professor.title}</h3>
                <Form onSubmit={this.onSubmit} author={user} user={professor} />
            </div>
        );
    }
}

RatePage.propTypes = {
    professor: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
    ]),
    loadProfessor: React.PropTypes.func,
    sendRate: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
    return {
        loadProfessor: (id) => dispatch(loadProfessor(id)),
        sendRate: (rateData, author, user) => dispatch(sendRate(rateData, author, user)),
    };
}

const mapStateToProps = createStructuredSelector({
  professorId: getPrefessorId(),
  professor: makeProfessor(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(RatePage);
