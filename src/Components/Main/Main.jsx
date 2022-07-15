import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";
import { useSelector } from "react-redux";


let blackBackground = [
  "font-size: 50px",
  "background: rgb(131,58,180);",
  "background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);",
].join(" ;");

let whiteBackground = [
  "font-size: 50px",
  "background: rgb(34,193,195);",
  "background: linear-gradient(0deg, rgba(34,193,195,1) 16%, rgba(193,42,162,0.23012955182072825) 44%);",
].join(" ;");

console.log(
  "%cM4L16N0 WAS HERE %cAND CRYPTED THE PAGE",
  blackBackground,
  whiteBackground
);

const Main = () => {
  const passObj = useSelector(state => state.password.passObj);
  return (
    <div className="main-container">
      <Link to={"/login"}>
        <button className="main-btn">LOGIN</button>
      </Link>
      <div className="rowContainer">
      <div className="main-links">
        <Link to={"/stolen"}>
          <p>https://st0l3n0bj3ct5.com/</p>
        </Link>
        <Link to={"/drugs"}>
          <p>https://buys0m3drug5.com/</p>
        </Link>
        <Link to={"/weapons"}>
          <p>https://w4r4ndw3ap0ns.com/</p>
        </Link>
        <Link to={"/firewall"}>
          <p>https://0v3rp4ssth4f1rew4ll.com/</p>
        </Link>
        <Link to={"/fake-news"}>
          <p>https://v3ryr3aln3w5.com/</p>
        </Link>
        <Link to={"/cryptos"}>
          <p>https://w1nw1ns0m3crypt0s.com/</p>
        </Link>
      </div>
      <div className="main-notebook">
      <div className="blocContainer">
    <div className="blocnotas">
  <div className="top">
 
  </div>
  <div className="paper" contentEditable="true">
  <p>Aquí se guardará la contraseña a medida que vayas desencriptando las pistas en cada página web.</p>
  <span><b>Password: </b></span>
  {passObj.weapon && <span><b>{passObj.weapon}</b></span>}
  {passObj.drug && <span><b>{passObj.drug}</b></span>}
  {passObj.stolengoods && <span><b>{passObj.stolengoods}</b></span>}
  {passObj.firewall && <span><b>{passObj.firewall}</b></span>}
  {passObj.crypto && <span><b>{passObj.crypto}</b></span>}
  {passObj.fakenews && <span><b>{passObj.fakenews}</b></span>}
  </div>
  
</div>
    </div>
      </div>
    </div>
</div>
    //flex-direction row para un contenedor de main-links y main-notebook
  );
};

export default Main;
