/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeProfessors = () => createSelector(
  selectHome,
  (homeState) => homeState.get('professors')
);

export {
  selectHome,
  makeProfessors,
};
