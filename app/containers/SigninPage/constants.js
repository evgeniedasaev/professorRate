/*
 * SigninConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CREATE_USER = 'professorRate/Signin/CREATE_USER';
export const CREATE_USER_SUCCESS = 'professorRate/Signin/CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'professorRate/Signin/CREATE_USER_ERROR';
