/*
 * ProfessorPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
    const { professor, user } = this.props;

    return (
      <div>
        <h2 className="c-heading c-heading--small u-letter-box--none">{professor.title}</h2>
        
        {
          professor &&
          <ProfessorPreview item={professor} showTitle={false} showShow={false} showRate={user} />
        }
        
        <h3 className="c-heading c-heading--small">Оценки от студентов</h3>
        <div className="u-letter-box--medium">
          {
            (
              typeof professor.comments === 'undefined' ||
              professor.comments.length === 0
            ) &&
            <span>Об этом преподователи еще не успели оставить отзыв.</span>
          }
          
          {
            typeof professor.comments !== 'undefined' &&
            professor.comments.length > 0 &&
            
              <div className="c-card">
                {
                  professor.comments.map((comment, i) => {
                    if (!comment.isPublished) return null;
                    
                    return (
                      <div key={i} className="c-card__item u-window-box--large">
                        <div className="c-text--loud">
                          {comment.authorName}
                        </div>
                        {
                          comment.rate &&
                          <div className="u-letter-box--small">
                            <span className="c-badge c-badge--warning">Оценка: {comment.rate}</span>
                          </div>
                        }
                        <div className="c-text--quiet">
                          {comment.comment}
                        </div>
                      </div>
                    );
                  })
                }
              </div>            
          }
        </div>
      </div>
    );
  }
}

ProfessorPage.propTypes = {
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
  professorId: getPrefessorId(),
  professor: makeProfessor(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ProfessorPage);
