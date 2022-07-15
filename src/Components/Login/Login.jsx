import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFormSubmit, loginFormChange } from "../../redux/auth/auth.actions";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginForm = useSelector((state) => state.auth.loginForm);

  const submitLogin = (ev) => {
    ev.preventDefault();
    const callback = () => navigate('/maligno');
    dispatch(loginFormSubmit(callback));
  }
  return (
    <div className="login-container">
      <p className="login-title">LOGIN</p>
      <form onSubmit={submitLogin}>
        <label>
          <span>USERNAME</span>
          <input type="text" name="username" value={loginForm.username} onChange={(ev) => dispatch(loginFormChange(ev))}></input>
        </label>
        <label>
          <span>PASSWORD</span>
          <input type="password" name="password" value={loginForm.password} onChange={(ev) => dispatch(loginFormChange(ev))}></input>
        </label>
        <button type="submit" className="submit-btn">
          ACCEDER
        </button>
      </form>

      <div className="login-statement">
        <p>Debes loguearte como 4RCH4N63L para conseguir destruirle.</p>
      </div>
    </div>
  );
};

export default Login;
