import React from "react";
import "./Notepad.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { storeFakenewsPass } from "../../../redux/password/password.actions";
import { useDispatch } from "react-redux";

const Notepad = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

	const showAlertError1 = () => {
		Swal.fire({
			icon: 'error',
			title: '¡Nop!',
			text: 'Por mucho que cueste creerlo, la tierra es... ¡redonda! Sigue intentándolo',
		})
	  }

	const showAlertError2 = () => {
		Swal.fire({
			icon: 'error',
			title: '¡Hasta luego, cocodrilo!',
			text: 'Si piensas que compartimos el planeta con hombres-lagarto, has fallado.',
		})
	  }

	const showAlertError3 = () => {
		Swal.fire({
			icon: 'error',
			title: 'Más quisieras.',
			text: 'Elon Musk es dueño hasta de tu alma.',
		})
	  }

	const showAlertError4 = () => {
		Swal.fire({
			icon: 'error',
			title: 'Bye Bye, bro.',
			text: 'Realmente la noticia puede ser 100% verídica... pero no es la respuesta correcta, sorry.',
		})
	  }


	const showAlertSuccess = () => {
		Swal.fire({
			title: '¡Encontraste parte de la contraseña!Y pensar que dentro de poco podrás atraparme con la mente...',
      color: "#f1f1f1d1",
      confirmButtonColor: '#222',
      background:
        'url("https://c.tenor.com/-SV9TjUGabMAAAAC/hacker-python.gif") no-repeat',
    }).then((result) => {
        if (result.isConfirmed) {
          const cb = () => navigate("/main");
          dispatch(storeFakenewsPass(cb))
          console.log("confirmado");
        }
      });
	  }


	return (
    <>
      <div className="notepadContainer">
        <div className="notepad">
          <div className="notepad-bar">
            <div className="notepad-icon">
              <img
                src="https://www.pngkey.com/png/full/142-1426797_download-count-windows-95-icon-png.png"
                alt="notepad icon"
                className="bloc"
              />
            </div>
            <div className="notepad-title">Programs - Notepad</div>
            <div className="notepad-exit">
              <div className="button-exit">&#10060;</div>
            </div>
            <div className="notepad-maximize">
              <div className="button-maximize">
                <div className="icon-maximize"></div>
              </div>
            </div>
            <div className="notepad-minimize">
              <div className="button-minimize">
                <div className="icon-minimize"></div>
              </div>
            </div>
          </div>
          <div className="notepad-settings">
            <div className="settings-text">
              <span className="underline">F</span>ile
            </div>
            <div className="settings-text">
              <span className="underline">E</span>dit
            </div>
            <div className="settings-text">
              <span className="underline">S</span>earch
            </div>
            <div className="settings-text">
              <span className="underline">H</span>elp
            </div>
          </div>
          <div className="notepad-content">
            <h2>Fake News - ¿Cuál de estas noticias es la verdadera?</h2>
			<div className="theories">
            <div className="flatEarth">
              <h3>La Tierra es plana y la NASA nos lo niega</h3>
              <p>
                No contenta con inventarse la llegada del hombre a la luna, la
                NASA también estaría detrás de la idea de que la Tierra es
                redonda. 
              </p>
			  <button className="selectBtn" onClick={() => showAlertError1()}>Seleccionar</button>
            </div>
            <div className="illuminati">
              <h3>Estamos gobernados por reptilianos</h3>
              <p>
			  Se dice que provienen de un sistema estelar llamado Alfa Draconis y que en la actualidad habitan en una gran red de cuevas subterráneas.
			  La gente se refiere a ellos para hablar de seres que controlan la política, la sociedad y la mente humana como tal por medio de su infiltración entre nosotros con el único objetivo de subyugarnos y esclavizar ser humano.
              </p>
			  <button className="selectBtn" onClick={() => showAlertError2()}>Seleccionar</button>
            </div>
            <div className="neuralink">
              <h3>Neuralink empezará a implantar chips cerebrales en humanos en 2022</h3>
              <p>
			  El chip permitirá a las personas comunicarse con dispositivos electrónicos a través del pensamiento. los primeros en recibirlos serán personas tetrapléjicas o con graves lesiones en la médula espinal, que gracias al chip estarán en condiciones de comunicarse con todo tipo de dispositivos electrónicos utilizando solo el pensamiento.
              </p>
			  <button className="selectBtn" onClick={() => showAlertSuccess()}>Seleccionar</button>
            </div>
            <div className="twitternews">
              <h3>Varios tuiteros juntan sus ahorros y compran Tesla</h3>
              <p>
			  Después de que Elon Musk mostrara públicamente su intención de comprar la red social Twitter, varios tuiteros han juntado sus ahorros y han comprado Tesla. De esta manera, la empresa de diseño, fabricación y venta de coches eléctricos deja de pertenecer al empresario sudafricano.
              </p>
			  <button className="selectBtn" onClick={() => showAlertError3()}>Seleccionar</button>
            </div>
            <div className="cryptobro">
              <h3>«Cryptobro» se convierte en «mendigobro»</h3>
              <p>
			  Tras meses alardeando de sus “astutas inversiones”, Jaime Masiá Sánchez ha pasado de ser considerado un cryptobro -el término con el que se autodenominan los jóvenes expertos en criptomonedas- a ser considerado un mendigobro.
			   “Hice caso de los memes equivocados y he acabado en la ruina”, ha explicado Masiá en las redes sociales.
              </p>
			  <button className="selectBtn" onClick={() => showAlertError4()}>Seleccionar</button>
            </div>
			</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notepad;
