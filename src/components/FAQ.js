import React, {useState} from 'react'
import questions from './../questions'
import Question from './Question';

export default function FAQ() {

    const [questionsFAQ, setQuestionsFAQ] = useState(questions);

    return (
        <div className="questions-container">
            <h3>FAQ</h3>
            <section className="faq-info">
                {
                    questionsFAQ.map((question) => {
                        return (
                            <Question key={question.id} {...question}></Question>
                        )
                    })
                }
            </section>
        </div>
    )
}
