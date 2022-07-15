import React from "react";
import "./Weapons.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import disk from "../../../images/harddisk.png";
import sable from "../../../images/sable.png";
import gun1 from "../../../images/gun1.png";
import gun2 from "../../../images/gun2.png";
import gun3 from "../../../images/gun3.png";
import gun4 from "../../../images/gun4.png";
import Swal from "sweetalert2";
import Clue from "../Clue/Clue";
import { storeWeaponPass } from "../../../redux/password/password.actions";

//Este componente de armas consiste en una habitación como si fuera de una armería
//en la que tienes que encontrar la pista con una linterna y la luz apagada.
//He implementado la librería Magnifier de React para la lupa que hace zoom-in en la pista
//una vez la has encontrado, además de un pen del usuario mahou123 de codepen que simula una linterna
//el pen es el siguiente: https://codepen.io/mahou123/pen/dyyBgGJ
//He intentado implementar también un alert que aparezca cuando intentas abandonar la página
/* window.onbeforeunload = function() {
  var message = 'Do you want to leave this page?';
  return message;
} */

const Weapons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const light = document.querySelector(".light");
    light.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, #000 15%)`;
  });

  const showAlert = () => {
    Swal.fire({
      title: "¡Conseguido! has encontrado parte de la contraseña",
      color: "#f1f1f1d1",
      confirmButtonColor: "#222",
      background:
        'url("https://c.tenor.com/-SV9TjUGabMAAAAC/hacker-python.gif") no-repeat',
    }).then((result) => {
      if (result.isConfirmed) {
        const cb = () => navigate("/main");
        dispatch(storeWeaponPass(cb))
        
        console.log("confirmado");
      }
    });
  };

  const showAlertError = () => {
    let timerInterval;
    Swal.fire({
      title: "3RR0R 404: P455W0RD N0T F0UND",
      color: "#ffffff",
      html: "Esta ventana se autodestruirá en <b></b> milisegundos.",
      timer: 3000,
      background:
        'url("https://i.pinimg.com/originals/e2/ca/51/e2ca511664a6f9cf2c5d9f92328534ae.gif") no-repeat',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  return (
    <div className="lightContainer">
      <Clue
        onClick={() => showAlert()}
        className="disk"
        src={disk}
        width={200}
      />
      <Clue
        onClick={() => showAlertError()}
        className="sable"
        src={sable}
        width={200}
      />
      <Clue
        onClick={() => showAlertError()}
        className="gun1"
        src={gun1}
        width={200}
      />
      <Clue
        onClick={() => showAlertError()}
        className="gun2"
        src={gun2}
        width={200}
      />
      <Clue
        onClick={() => showAlertError()}
        className="gun3"
        src={gun3}
        width={200}
      />
      <Clue
        onClick={() => showAlertError()}
        className="gun4"
        src={gun4}
        width={200}
      />
      <div className="light"></div>
    </div>
  );
};

export default Weapons;
