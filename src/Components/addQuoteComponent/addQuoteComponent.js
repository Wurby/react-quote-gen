import React, { useState, useEffect } from "react";
import "./addQuoteComponent.css";

export default function AddQuote() {
  const [quote, setQuote] = useState({
    quote: "quote here",
    author: "author name"
  });

  function handleQuoteChange(event) {
    setQuote({ quote: event.target.value, author: quote.author });
  }
  function handleAuthorChange(event) {
    setQuote({ quote: quote.quote, author: event.target.value });
  }

  return (
    <div class="card-wrapper">
      {quote.quote + " " + quote.author}
      <form class="card">
        <textarea
          placeholder="Enter a quote here!"
          name="quote"
          onChange={handleQuoteChange}
        ></textarea>
        <input
          placeholder="Author Name"
          name="authorName"
          onChange={handleAuthorChange}
        ></input>
        <button
          type="submit"
          onClick={event => {
            event.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
