import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.scss";

const About = () => {
  const navigate = useNavigate();
  document.body.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      navigate("/");
    }
  });
  return (
    <div className="aboutContainer">
      <div className="aboutConsole">
        <div className="top">
          {" "}
          <span className="options">⦿ ○ ○</span>{" "}
          <span className="title">ABOUT US APP</span>
        </div>
        <div className="tabs"> </div>
        <div className="text">
          <p>
            [06:24:55] Finished{" "}
            <span className="pink">'Misión completada con éxito.'</span>
          </p>
          <p>
            [06:24:55] Finished{" "}
            <span className="pink">'¡Has conseguido atrapar a 4RCH4N63L!'</span>
          </p>
          <p>
            [06:24:55] Finished{" "}
            <span className="pink">
              'Gracias por velar por nuestra seguridad.'
            </span>
          </p>
          <p>
            [06:24:55] Finished{" "}
            <span className="pink">'Hasta pronto, detective.'</span>
          </p>
          <p>
            [06:24:55] Starting{" "}
            <span className="pink">'lanzando aplicación'</span>...
          </p>
          <p>
            [06:25:00] <span className="blue"> Recopilando datos</span>...
          </p>
          <p>
            [06:25:02] <span className="orange">...</span>
          </p>
          <p>
            [06:25:02] <span className="orange">...</span>
          </p>
          <p>[06:25:06] </p>
          <span className="blue">* </span> Este es un proyecto colaborativo
          realizado por los alumnos
          <br></br>
          <span className="blue">Luis Camino Malo</span>,{" "}
          <span className="blue">Mireia García González</span>,{" "}
          <span className="blue">Francisco Javier Riquelme Sánchez</span> y{" "}
          <span className="blue">Gloria Vega Berná</span>.<br></br>del curso{" "}
          <span className="orange">FSD-FT-MAY-2022</span> del Bootcamp de
          Upgrade Hub<span className="orange">.</span>
          <br></br>
          <br></br>
          <p className="typewriter">
            {" "}
            root@4RCH4N63L sudo <span className="pink"> about-us.exe</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
