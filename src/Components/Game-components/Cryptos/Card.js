import React from "react";
import "./Cryptos.scss";
import backIMG from "../../../images/Coinbase-back.png";

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={backIMG} onClick={handleClick} alt="cover" />
      </div>
    </div>
  );
}

export default Card;
