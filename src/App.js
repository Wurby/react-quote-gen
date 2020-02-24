import React from "react";
import "./App.css";
import MenuComponent from "./Components/menuComponent";
import AddQuote from "./Components/addQuoteComponent/addQuoteComponent";
import DisplayQuote from "./Components/randomQuoteComponent/randomQuoteComponent";

function App() {
  const menuBar = MenuComponent();
  const content = <DisplayQuote quote="stuff" author="me" />;
  const addQuoteForm = AddQuote();

  return (
    <div>
      <header>{menuBar}</header>
      <div>
        {content}
        {addQuoteForm}
      </div>
    </div>
  );
}

export default App;
