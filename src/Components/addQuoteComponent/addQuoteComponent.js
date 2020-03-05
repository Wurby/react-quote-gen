import React from "react";
import "./addQuoteComponent.css";

export default function AddQuote(props) {
  function submit(event) {
    event.preventDefault();
    props.addQuoteToArray(props.handleQuote, props.handleAuthor);
    props.setQuote({ quote: "", author: "" });
  }
  return (
    <div className="card-wrapper">
      <form className="card" name="form" onSubmit={submit}>
        <textarea
          value={props.quote.quote}
          placeholder={props.initialFormState.quote}
          name="quote"
          onChange={props.handleQuote}
        ></textarea>
        <input
          value={props.quote.author}
          placeholder={props.initialFormState.author}
          name="authorName"
          onChange={props.handleAuthor}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
