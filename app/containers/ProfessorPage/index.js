/*
 * ProfessorPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadProfessor } from './actions';
import { getPrefessorId, makeProfessor } from './selectors';

import ProfessorPreview from '../../components/ProfessorPreview';

export class ProfessorPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when professors is not empty, load best professors
   */
  componentDidMount() {
    if (this.props.professorId) {
      this.props.loadProfessor(this.props.professorId);
    }
  }

  render() {
    const { loading, error, professor } = this.props;
    
    return (
      <main className="o-container o-container--large u-pillar-box--small">
        <h2 className="c-heading c-heading--small">{professor.title}</h2>
        
        {
          professor &&
          <ProfessorPreview item={professor} showTitle={false} showShow={false} />
        }
        
        {
          typeof professor.comments !== 'undefined' &&
          <h3 className="c-heading c-heading--small">Оценки от студентов</h3>
        }
        
        {
          typeof professor.comments !== 'undefined' &&
          <div className="c-card">
            {
              professor.comments.map((comment, i) => {
                return (
                  <div key={i} className="c-card__item u-window-box--large">
                    <div className="c-text--loud">
                      {comment.authorName}
                    </div>
                    <div className="u-letter-box--small">
                      <span className="c-badge c-badge--warning">Оценка: {comment.rate}</span>
                    </div>
                    <div className="c-text--quiet">
                      {comment.comment}
                    </div>
                  </div>
                );
              })
            }
          </div>
        }
      </main>
    );
  }
}

ProfessorPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  professor: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  loadProfessor: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadProfessor: (id) => dispatch(loadProfessor(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  professorId: getPrefessorId(),
  professor: makeProfessor(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ProfessorPage);
