import { useState } from 'react';

export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const questionId = `faq-question-${index}`;
        const answerId = `faq-answer-${index}`;

        return (
          <div
            key={item.question}
            className={`faq-item${isOpen ? ' open' : ''}`}
          >
            <button
              type="button"
              id={questionId}
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => toggle(index)}
            >
              {item.question}
              <span className="toggle" aria-hidden="true">+</span>
            </button>
            <div
              id={answerId}
              className="faq-answer"
              role="region"
              aria-labelledby={questionId}
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
