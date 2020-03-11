import React, { useState } from "react";
import "./App.css";
import AddQuote from "./Components/addQuoteComponent/addQuoteComponent";
import DisplayQuote from "./Components/randomQuoteComponent/randomQuoteComponent";
import quotesFileArray from "./Data/quotes.ts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import AllQuotes from "./Components/AllQuotes/AllQuotes";

function App() {
  const [quote, setQuote] = useState({
    quote: "",
    author: ""
  });

  const initialFormState = {
    quote: "Enter your quote here",
    author: "Author here"
  };

  const [quoteArray, setQuoteArray] = useState([...quotesFileArray]);

  function addQuoteToArray() {
    setQuoteArray([...quoteArray, quote]);
  }

  function handleQuoteChange(event) {
    setQuote({ quote: event.target.value, author: quote.author });
  }

  function handleAuthorChange(event) {
    setQuote({ quote: quote.quote, author: event.target.value });
  }

  const content = <DisplayQuote quoteArray={quoteArray} />;
  const addQuoteForm = (
    <AddQuote
      handleQuote={handleQuoteChange}
      handleAuthor={handleAuthorChange}
      addQuoteToArray={addQuoteToArray}
      quote={quote}
      initialFormState={initialFormState}
      setQuote={setQuote}
    />
  );
  const listOfQuotes = <AllQuotes quotesArray={quoteArray} />;

  return (
    <Router>
      <nav className="topnav">
        <span>
          <NavLink
            exact={true}
            to="/react-quote-gen/"
            activeClassName="is-active"
          >
            Random Quotes
          </NavLink>
        </span>
        <span>
          <NavLink
            exact={true}
            to="/react-quote-gen/quotes-list"
            activeClassName="is-active"
          >
            List of Quotes
          </NavLink>
        </span>
      </nav>
      <Switch>
        <Route exact={true} path="/react-quote-gen/">
          {content} {addQuoteForm}
        </Route>
        <Route exact={true} path="/react-quote-gen/quotes-list">
          {listOfQuotes}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
