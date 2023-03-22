import React, { useState, useEffect } from "react";
import Divider from "../../images/pattern-divider-desktop.svg";
import Dice from "../../images/icon-dice.svg";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(Math.floor(Math.random() * 500));

  const fetchAdvice = async () => {
    const timestamp = new Date().getTime();
    const response = await fetch(`https://api.adviceslip.com/advice?t=${timestamp}`);
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceId(Math.floor(Math.random() * 500));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="advice-layout">
      <div className="advice-container">
        <p className="advice-number">ADVICE #{adviceId}</p>
        <p className="advice-quote">"{advice}"</p>
        <img className="advice-divider" src={Divider} alt="Pattern Divider for card"></img>
        <button className="advice-button" onClick={fetchAdvice}>
          <img className="dice-icon" src={Dice} alt="Dice svg"></img>
        </button>
      </div>
    </div>
  );
};

export default Advice;
