import React from "react";
import "./menuComponent.css";

export default function menuComponent() {
  return (
    <div class="topnav">
      <a class="active" href="#home">
        Random Quotes
      </a>
      <a href="#quotes">List of Quotes</a>
    </div>
  );
}
