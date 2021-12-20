import React, { useState } from "react";
import questions from "./../questions";
import Question from "./Question";

export default function FAQ() {
  const [questionsFAQ] = useState(questions);

  return (
    <section className="questions-section">
      <div className="questions-container">
        <div className="faq-title">
          <h3>FAQ</h3>
        </div>
        <div className="faq-info">
          {questionsFAQ.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </div>
      </div>
    </section>
  );
}
