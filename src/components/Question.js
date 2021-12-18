import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Question({ question, answer }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{question}</h4>
        <button className="minus-plus-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{answer}</p>}
    </div>
  );
}
