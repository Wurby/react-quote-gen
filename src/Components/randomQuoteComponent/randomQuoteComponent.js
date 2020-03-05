import React, { useState } from "react";
import "./randomQuoteComponent.css";

export default function DisplayQuote(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="card-wrapper">
      <article className="card">
        <h2>Enjoy the quote:</h2>
        <div className="quote">"{props.quoteArray[count].quote}"</div>

        <span className="author">~{props.quoteArray[count].author}.</span>
        <br />
        <button
          onClick={() => {
            count + 1 < props.quoteArray.length
              ? setCount(count + 1)
              : setCount(0);
          }}
        >
          Next Quote
        </button>
      </article>
    </div>
  );
}
