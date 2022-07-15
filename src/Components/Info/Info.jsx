import React from "react";
import useTimeout from "../../useTimeOut";
import "./Info.scss";

function Info() {
  return (
    <div className="info-container">
        <div className="text-container">
          <p className="c1">
            Una serie de delitos se han cometido dentro de la Deep Web. El autor
            es un famoso hacker conocido como <span>4RCH4N63L.</span>
          </p>
          <p className="c2">
            Estos delitos no han podido ser rastreados por el Servicio de
            Inteligencia debido a la alta encriptación de los datos.
          </p>
          <p className="c3">
            Por ello han sido solicitados tus servicios como hacker.
          </p>
          <p className="c4">
            Tu misión es conseguir descubrir cuales son los delitos cometidos y
            desencriptar los datos para obtener las credenciales de <span>4RCH4N63L.</span>
          </p>
          <p className="c5">
            Debes acabar con su reinado de terror de una vez por todas.
          </p>
          <p className="c6">No puedes fallar.</p>
          <p className="c7">Buena suerte.</p>
        </div>
        
      
        {useTimeout(() => {
          const link = document.createElement("a");
          link.textContent = "C0N7INU3 T0 6AM3";
          link.classList.add("info-btn");
          link.href = "/main";
          const infoContainer = document.querySelector(".info-container");
          infoContainer.appendChild(link);
        }, 30500)}
      
    </div>
  );
}

export default Info;
