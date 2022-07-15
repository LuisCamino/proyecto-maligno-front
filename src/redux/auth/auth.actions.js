import axios from "axios";
export const CHANGE_LOGIN_FORM = 'CHANGE_LOGIN_FORM';
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_OK = "LOGIN_USER_OK";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";


export const loginFormChange = (ev) => dispatch => {
    const {name, value} = ev.target;
  
    dispatch({
      type: CHANGE_LOGIN_FORM,
      payload: { name, value }
    });
  };
  
export const loginFormSubmit = (callback) => (dispatch, getState) => {
  const state = getState();
  dispatch({ type: LOGIN_USER });

  axios
    .post("http://localhost:4500/users/login", state.auth.loginForm, {
      withCredentials: true,
    })
    .then((res) => {
      dispatch({ type: LOGIN_USER_OK, payload: res.data });
      callback();
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: LOGIN_USER_ERROR, payload: error.message });
    });
};
