import { useState } from 'react';

export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div
          key={item.question}
          className={`faq-item${openIndex === index ? ' open' : ''}`}
        >
          <button
            type="button"
            className="faq-question"
            aria-expanded={openIndex === index}
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="toggle" aria-hidden="true">+</span>
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
