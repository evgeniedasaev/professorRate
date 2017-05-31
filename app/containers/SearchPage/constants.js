/*
 * SearchConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_SEARCHED_PROFESSORS = 'professorRate/Search/LOAD_SEARCHED_PROFESSORS';
export const LOAD_SEARCHED_PROFESSORS_SUCCESS = 'professorRate/Search/LOAD_SEARCHED_PROFESSORS_SUCCESS';
export const LOAD_SEARCHED_PROFESSORS_ERROR = 'professorRate/Search/LOAD_SEARCHED_PROFESSORS_ERROR';
