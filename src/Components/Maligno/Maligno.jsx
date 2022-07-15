import React from 'react'
import "./Maligno.scss"
import { useNavigate } from "react-router-dom";

const Maligno = () => {
    const navigate = useNavigate();
    document.body.addEventListener("keydown", function (event) {
        if (event.key === "d") {
            navigate('/about');
        }
    });
    return (
    <div className="terminalContainer">
    <div className="overlay overlay--scanline"></div>
<div className="overlay overlay--vignette"></div>
<div className="flex-full-justify">
  <div className="flex-inner">
    <div className="text-center">
      <h1 className="archangelTitle">4RCH4N63L.exe</h1>
    </div>
    <p>A fatal error 0x1337 has occurred at C:/User/4RCH4N63L/Documents/d4rkw3b5.js. The current website will be terminated.</p>
    <ul>
       <li><p>Are you sure you want to continue?</p></li>
    </ul>
    <p className="text-center">Press d to permanently delete this website <span class="blink">_</span></p>
  </div>
</div>
    </div>
  )
}

export default Maligno