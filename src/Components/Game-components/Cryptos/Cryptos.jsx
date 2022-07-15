import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeCryptosPass } from "../../../redux/password/password.actions";
import Card from "./Card";
import Swal from "sweetalert2";
import "./Cryptos.scss";

const cardImages = [
  { src: "../../../img/Bitcoin-icon.png", matched: false },
  { src: "../../../img/Tether-icon.png", matched: false },
  { src: "../../../img/Dash-icon.png", matched: false },
  { src: "../../../img/Dogecoin-icon.png", matched: false },
  { src: "../../../img/EOS-icon.png", matched: false },
  { src: "../../../img/Monero-icon.png", matched: false },
];

function Cryptos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState();
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [matchesNumber, setMatchesNumber] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              setMatchesNumber(matchesNumber + 1);
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  const finishGame = () => {
    Swal.fire({
      title: "Descifraste parte de las credenciales",
      color: "#f1f1f1d1",
      confirmButtonColor: "#222",
      background:
        'url("https://c.tenor.com/-SV9TjUGabMAAAAC/hacker-python.gif") no-repeat',
    }).then((result) => {
      if (result.isConfirmed) {
        const cb = () => navigate("/main");
        dispatch(storeCryptosPass(cb));
        console.log("confirmado");
      }
    });
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (matchesNumber === 6) {
      finishGame();
    }
  }, [matchesNumber]);

  return (
    <div className="cryptos-container">
      <h1 className="cryptos-title">Crypto Match</h1>
      <div className="cryptos-description">
        Debes acertar todas las parejas de estas criptomonedas.
      </div>
      <p className="crypto-turns">Turns: {turns}</p>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

    </div>
  );
}

export default Cryptos;
