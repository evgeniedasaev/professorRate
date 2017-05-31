/**
 * Searchpage selectors
 */

import { createSelector } from 'reselect';

const getQtail = () => (state, props) => props.routeParams.qtail;

const selectSearch = (state) => state.get('search');

const makeProfessors = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('professors')
);

export {
  getQtail,
  selectSearch,
  makeProfessors,
};
