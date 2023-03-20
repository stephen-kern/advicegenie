import React, { useState, useEffect } from "react";
import Divider from "../../images/pattern-divider-desktop.svg";
import Dice from "../../images/icon-dice.svg";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(Math.floor(Math.random() * 100000));

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceId(Math.floor(Math.random() * 100));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main>
      <div className="advice-container">
        <p className="advice-number">
          ADVICE #{adviceId}
        </p>
        <p className="advice-quote">"{advice}"</p>
        <img src={Divider} alt="Pattern Divider for card"></img>
        <button className="advice-button" onClick={fetchAdvice}><img className="dice-icon" src={Dice} alt="Dice svg"></img></button>
      </div>

      
    </main>
  );
};

export default Advice;
