import React from "react";
import "./Fake-news.scss";
import Notepad from "../Notepad/Notepad";
import Swal from "sweetalert2";
import { useState } from "react";

//He cogido como inspiración para este componente de Fake-News un pen de codepen
//https://codepen.io/fizzypop109/pen/Kjbbjq
//He descargado también un paquete de iconos de escritorio de windows 95
//de la siguiente página https://wallpapers-clan.com/app-icons/windows-95/
//en el que simula la pantalla de un ordenador con el sistema operativo de Windows 95
//En este componente has de seleccionar la noticia que sea verdadera entre todas las que hay

const FakeNews = () => {
  const showAlertInsta = () => {
    Swal.fire('4RCH4N63L DICE: "No es momento para mirar fotos de gatitos"');
  };

  const showAlertPrime = () => {
    Swal.fire(
      '4RCH4N63L DICE: "Ya tendrás tiempo para ver la última temporada de The Boys"'
    );
  };

  const showAlertApple = () => {
    Swal.fire(
      '4RCH4N63L DICE: "Ahora en serio... ¿hay alguien que de verdad utilice Apple Music?"'
    );
  };

  const showAlertMessenger = () => {
    Swal.fire('4RCH4N63L DICE: "Ya podrás chatear más tarde."');
  };

  const showAlertExplorer = () => {
    Swal.fire(
      '4RCH4N63L DICE: "Así que eres de esas personas que utilizan Internet Explorer en pleno siglo XXI"'
    );
  };

  const showAlertDiscord = () => {
    Swal.fire("4RCH4N63L DICE: *No hay nadie conectado*");
  };

  const showAlertTwitch = () => {
    Swal.fire(
      '4RCH4N63L DICE: "No, ElRubius no está transmitiendo ahora mismo. Céntrate."'
    );
  };

  const showAlertGoogle = () => {
    Swal.fire('4RCH4N63L DICE: "No vas a encontrar la solución aquí."');
  };

  const showAlertFacebook = () => {
    Swal.fire(
      '4RCH4N63L DICE: "Las fotos del viaje a Benidorm de tu tía pueden esperar."'
    );
  };

  const showAlertLinkedIn = () => {
    Swal.fire('4RCH4N63L DICE: "No te engañes, nadie te va a contratar."');
  };

  const showAlertTinder = () => {
    Swal.fire('4RCH4N63L DICE: "...really?"');
  };

  const showAlertChrome = () => {
    Swal.fire('4RCH4N63L DICE: "No hay nada que ver por aquí."');
  };

  const showAlertSpotify = () => {
    Swal.fire(
      '4RCH4N63L DICE: "Todos sabemos que te gusta escuchar a Luis Miguel."'
    );
  };

  const showAlertTwitter = () => {
    Swal.fire('4RCH4N63L DICE: "#Team4RCH4N63L"');
  };

  const showAlertWeather = () => {
    Swal.fire(
      '4RCH4N63L DICE: "Se prevee una buena tormenta de troyanos como no te des prisa."'
    );
  };

  const showAlertSnapchat = () => {
    Swal.fire('4RCH4N63L DICE: "A nadie le interesa tu vida."');
  };

  const showAlertIncognito = () => {
    Swal.fire('4RCH4N63L DICE: "¿Qué pretendes buscar aquí, eh pillín?"');
  };

  const showAlertYouTube = () => {
    Swal.fire(
      '4RCH4N63L DICE: "Ningún videotutorial podrá ayudarte a atrapar a Maligno."'
    );
  };

  function updateTime() {
    //Esta función actualiza en tiempo real la hora local con la plantilla del ordenador
    let today = new Date();
    let hours24 = today.getHours();
    let hours12;
    let minutes = today.getMinutes();
    let suffix = "";

    if (hours24 >= 12) {
      suffix = " PM";
      hours12 = hours24 % 12;
    } else {
      suffix = " AM";
      hours12 = hours24;
    }

    if (minutes % 10 === 0) {
      //minutes = minutes + "0";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let time = hours12 + ":" + minutes + suffix;

    let timeBox = document.querySelector(".start__time-text");

    timeBox.innerHTML = time;
  }

  setInterval(updateTime, 1000);

  // Para poder arrastrar los objetos

  let desktopIcons = document.getElementsByClassName("desktop-icon");

  for (let i = 0; i < desktopIcons.length; i++) {
    dragElement(desktopIcons[i]);
  }

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();

      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;

      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // para calcular la nueva posición del cursor
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // para setear la nueva posición
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  //Para mostrar el componente Notepad

  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <div className="container-fakeNews">
        <div className="monitor">
          <div className="start">
            <div className="start__button">
              <div className="start__logo"></div>
              <p className="start__text">Start</p>
            </div>
            <div className="start__time">
              <p className="start__time-text"></p>
            </div>
          </div>
          <div className="start__menu-main">
            <div className="start__menu-main-side">
              <div className="start__menu-main-side-text text">
                <p className="ninefive">95</p>
                <p className="windows">Windows</p>
              </div>
            </div>
            <div className="start__menu-main-items">
              <ul className="start__menu-main-items-list1">
                <li className="start__menu-main-items-item programs">
                  <img
                    className="programs-img icon"
                    src="https://i.ya-webdesign.com/images/windows-95-icons-png-7.png"
                    alt="Programs"
                  />
                  <p className="start__menu-main-items-item-title programs">
                    <span className="underline">P</span>rograms
                  </p>
                  <div className="start__menu-main-items-item-arrowright"></div>
                  <ul className="start__menu-sub sub__programs">
                    <li className="start__menu-sub-items-item sub__programs-items">
                      <img
                        className="accessories-img icon"
                        src="https://i.ya-webdesign.com/images/windows-95-icons-png-7.png"
                        alt="Accessories"
                      />
                      <p className="start__menu-sub-items-item-title accessories">
                        Accessories
                      </p>
                      <div className="start__menu-main-items-item-arrowright"></div>
                    </li>

                    <li className="start__menu-sub-items-item sub__programs-items">
                      <img
                        className="startup-img icon"
                        src="https://i.ya-webdesign.com/images/windows-95-icons-png-7.png"
                        alt="StartUp"
                      />
                      <p className="start__menu-sub-items-item-title startup">
                        StartUp
                      </p>
                      <div className="start__menu-main-items-item-arrowright"></div>
                    </li>

                    <li className="start__menu-sub-items-item sub__programs-items">
                      <img
                        className="dos-img icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Msdos-icon.png"
                        alt="DOS"
                      />
                      <p className="start__menu-sub-items-item-title dos">
                        MS-DOS Prompt
                      </p>
                      <div className="start__menu-main-items-item-arrowright"></div>
                    </li>
                  </ul>
                </li>
                <li className="start__menu-main-items-item documents">
                  <img
                    className="documents-img icon"
                    src="https://i.ya-webdesign.com/images/windows-95-icons-png-6.png"
                    alt="Documents"
                  />
                  <p className="start__menu-main-items-item-title documents">
                    <span className="underline">D</span>ocuments
                  </p>
                  <div className="start__menu-main-items-item-arrowright"></div>
                </li>
                <li className="start__menu-main-items-item settings">
                  <div className="settings-img icon bg-img"></div>
                  <p className="start__menu-main-items-item-title settings">
                    <span className="underline">S</span>ettings
                  </p>
                  <div className="start__menu-main-items-item-arrowright"></div>
                </li>

                <li className="start__menu-main-items-item find">
                  <div className="find-img icon bg-img"></div>
                  <p className="start__menu-main-items-item-title find">
                    <span className="underline">F</span>ind
                  </p>
                  <div className="start__menu-main-items-item-arrowright"></div>
                </li>

                <li className="start__menu-main-items-item help">
                  <img
                    className="help-img icon"
                    src="https://expensive.toys/img/about-icon.png"
                    alt="Help"
                  />
                  <p className="start__menu-main-items-item-title help">
                    <span className="underline">H</span>elp
                  </p>
                </li>

                <li className="start__menu-main-items-item run">
                  <div className="run-img icon bg-img"></div>
                  <p className="start__menu-main-items-item-title run">
                    <span className="underline">R</span>un...
                  </p>
                </li>
              </ul>

              <ul className="start__menu-main-items-list2">
                <li className="start__menu-main-items-item shutdown">
                  <div className="shutdown-img icon bg-img"></div>
                  <p className="start__menu-main-items-item-title shutdown">
                    Sh<span className="underline">u</span>t Down...
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="fakepc desktop-icon">
            <div className="fakepc__icon desktop-icon__icon"></div>
            <p className="fakepc__text desktop-icon__text">My Computer</p>
          </div>

          <div className="recycle desktop-icon">
            <div className="recycle__icon desktop-icon__icon"></div>
            <p className="recycle__text desktop-icon__text">Recycle Bin</p>
          </div>

          <div className="instagram desktop-icon">
            <div
              className="instagram__icon desktop-icon__icon"
              onClick={() => showAlertInsta()}
            ></div>
            <p className="instagram__text desktop-icon__text">Instagram</p>
          </div>

          <div className="prime desktop-icon">
            <div
              className="prime__icon desktop-icon__icon"
              onClick={() => showAlertPrime()}
            ></div>
            <p className="prime__text desktop-icon__text">Prime Video</p>
          </div>

          <div className="music desktop-icon">
            <div
              className="music__icon desktop-icon__icon"
              onClick={() => showAlertApple()}
            ></div>
            <p className="music__text desktop-icon__text">Apple Music</p>
          </div>

          <div className="messenger desktop-icon">
            <div
              className="messenger__icon desktop-icon__icon"
              onClick={() => showAlertMessenger()}
            ></div>
            <p className="messenger__text desktop-icon__text">Messenger</p>
          </div>

          <div className="explorer desktop-icon">
            <div
              className="explorer__icon desktop-icon__icon"
              onClick={() => showAlertExplorer()}
            ></div>
            <p className="explorer__text desktop-icon__text">Explorer</p>
          </div>

          <div className="notes desktop-icon" onClick={handleClick}>
            <div className="notes__icon desktop-icon__icon"></div>
            <p className="notes__text desktop-icon__text">Notes</p>
          </div>

          <div
            className="discord desktop-icon"
            onClick={() => showAlertDiscord()}
          >
            <div className="discord__icon desktop-icon__icon"></div>
            <p className="discord__text desktop-icon__text">Discord</p>
          </div>

          <div
            className="twitch desktop-icon"
            onClick={() => showAlertTwitch()}
          >
            <div className="twitch__icon desktop-icon__icon"></div>
            <p className="twitch__text desktop-icon__text">Twitch</p>
          </div>

          <div
            className="google desktop-icon"
            onClick={() => showAlertGoogle()}
          >
            <div className="google__icon desktop-icon__icon"></div>
            <p className="google__text desktop-icon__text">Google</p>
          </div>

          <div
            className="facebook desktop-icon"
            onClick={() => showAlertFacebook()}
          >
            <div
              className="facebook__icon desktop-icon__icon"
              onClick={() => showAlertFacebook()}
            ></div>
            <p className="facebook__text desktop-icon__text">Facebook</p>
          </div>

          <div
            className="linkedin desktop-icon"
            onClick={() => showAlertLinkedIn()}
          >
            <div
              className="linkedin__icon desktop-icon__icon"
              onClick={() => showAlertLinkedIn()}
            ></div>
            <p className="linkedin__text desktop-icon__text">LinkedIn</p>
          </div>

          <div
            className="tinder desktop-icon"
            onClick={() => showAlertTinder()}
          >
            <div className="tinder__icon desktop-icon__icon"></div>
            <p className="tinder__text desktop-icon__text">Tinder</p>
          </div>

          <div
            className="chrome desktop-icon"
            onClick={() => showAlertChrome()}
          >
            <div className="chrome__icon desktop-icon__icon"></div>
            <p className="chrome__text desktop-icon__text">Chrome</p>
          </div>

          <div
            className="spotify desktop-icon"
            onClick={() => showAlertSpotify()}
          >
            <div className="spotify__icon desktop-icon__icon"></div>
            <p className="spotify__text desktop-icon__text">Spotify</p>
          </div>

          <div
            className="twitter desktop-icon"
            onClick={() => showAlertTwitter()}
          >
            <div className="twitter__icon desktop-icon__icon"></div>
            <p className="twitter__text desktop-icon__text">Twitter</p>
          </div>

          <div
            className="weather desktop-icon"
            onClick={() => showAlertWeather()}
          >
            <div className="weather__icon desktop-icon__icon"></div>
            <p className="weather__text desktop-icon__text">Weather</p>
          </div>

          <div
            className="snapchat desktop-icon"
            onClick={() => showAlertSnapchat()}
          >
            <div className="snapchat__icon desktop-icon__icon"></div>
            <p className="snapchat__text desktop-icon__text">Snapchat</p>
          </div>

          <div
            className="incognito desktop-icon"
            onClick={() => showAlertIncognito()}
          >
            <div className="incognito__icon desktop-icon__icon"></div>
            <p className="incognito__text desktop-icon__text">Incognito</p>
          </div>

          <div
            className="youtube desktop-icon"
            onClick={() => showAlertYouTube()}
          >
            <div className="youtube__icon desktop-icon__icon"></div>
            <p className="youtube__text desktop-icon__text">YouTube</p>
          </div>
          {isShown && <Notepad />}
        </div>
      </div>
    </>
  );
};

export default FakeNews;
