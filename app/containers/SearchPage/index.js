/*
 * SearchPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadSearchedProfessors } from './actions';
import { getQtail, makeProfessors } from './selectors';

import ProfessorPreview from '../../components/ProfessorPreview';

export class SearchPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when professors is not empty, load best professors
   */
  componentDidMount() {
    this.props.loadSearchedProfessors(this.props.qtail);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.qtail != this.props.qtail) {
      this.props.loadSearchedProfessors(nextProps.qtail);
    }
  }

  render() {
    const { qtail, professors, user } = this.props;

    return (
      <main className="o-container o-container--large u-pillar-box--small">
        <h2 className="c-heading c-heading--small">Все преподаватели по запросу "{qtail}"</h2>
        {
          professors &&
          professors.map((professor, i) => {
            return (
              <ProfessorPreview key={i} item={professor} showRate={user} />
            );
          })
        }
      </main>
    );
  }
}

SearchPage.propTypes = {
  professors: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  loadSearchedProfessors: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadSearchedProfessors: (qtail) => dispatch(loadSearchedProfessors(qtail)),
  };
}

const mapStateToProps = createStructuredSelector({
  qtail: getQtail(),
  professors: makeProfessors(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
