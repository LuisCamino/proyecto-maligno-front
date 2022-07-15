import * as actions from "./auth.actions";

const initialFormState = {
  username: "",
  password: "",
};

const initialState = {
  user: null,
  loading: false,
  error: "",
  loginForm: initialFormState,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.CHANGE_LOGIN_FORM: {
        return {
          ...state,
          loginForm: {
            ...state.loginForm,
            [payload.name]: payload.value,
          }
        }
      }  

    case actions.LOGIN_USER: {
      return { ...state, loading: true };
    }
    case actions.LOGIN_USER_OK: {
      return {
        ...state,
        loading: false,
        user: payload,
        loginForm: [ {
          username: "",
          password: "",
        }, false, true, false],
      };
    }
    case actions.LOGIN_USER_ERROR: {
      return { ...state, loading: false, user: false, error: payload };
    }
    default: {
      return state;
    }
  }
};
