import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Question({ question, answer }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h5>{question}</h5>
        <button
          className="minus-plus-btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className="answer">{answer}</p>}
    </div>
  );
}
