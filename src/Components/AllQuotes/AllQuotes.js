import React from "react";
import "./AllQuotes.css";

export function AllQuotes(props) {
  const tableData = props.quotesArray.map(el => (
    <tr key={el.author}>
      <td>{el.quote}</td>
      <td>{el.author}</td>
    </tr>
  ));
  return (
    <div className="card-wrapper">
      <div className="card">
        <p>A table of all quotes currently in rotation:</p>
        <table>
          <thead>
            <tr>
              <th>Quote</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </div>
  );
}

export default AllQuotes;
