import React from "react";
import "./randomQuoteComponent.css";

export default function DisplayQuote(props) {
  return (
    <div class="card-wrapper">
      <article class="card">
        <h2>Enjoy the quote:</h2>
        <span class="quote">"{props.quote}"</span>
        <br />
        <span class="author">~{props.author}.</span>
        <br />
        <button>Next Quote</button>
      </article>
    </div>
  );
}
