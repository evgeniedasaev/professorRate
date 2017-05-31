/**
 * Professorpage selectors
 */

import { createSelector } from 'reselect';

const getPrefessorId = () => (state, props) => props.routeParams.id;

const selectProfessor = (state) => state.get('professor');

const makeProfessor = () => createSelector(
  selectProfessor,
  (professorState) => professorState.get('currentProfessor')
);

export {
  getPrefessorId,
  selectProfessor,
  makeProfessor,
};
