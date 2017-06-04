/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadBestProfessors } from './actions';
import { makeProfessors } from './selectors';

import ProfessorPreview from '../../components/ProfessorPreview';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when professors is not empty, load best professors
   */
  componentDidMount() {
    if (!this.props.professors) {
      this.props.loadBestProfessors();
    }
  }

  render() {
    const { professors, user } = this.props;

    return (
      <div>
        <h2 className="c-heading c-heading--small u-letter-box--none">Лучшие профессора</h2>
        {
          professors &&
          professors.map((professor, i) => {
            return (
              <ProfessorPreview key={i} item={professor} showRate={user} />
            );
          })
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  professors: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  loadBestProfessors: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadBestProfessors: () => dispatch(loadBestProfessors()),
  };
}

const mapStateToProps = createStructuredSelector({
  professors: makeProfessors(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
