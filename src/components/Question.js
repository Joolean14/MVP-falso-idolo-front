import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Question({ question, answer }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header onClick={() => setShowInfo(!showInfo)}>
        <h5>{question}</h5>
        <button className="minus-plus-btn">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className="answer">{answer}</p>}
    </div>
  );
}
