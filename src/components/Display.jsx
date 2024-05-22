// Display.js
import React from "react";

function Display({ expression, result }) {
  return (
    <div className="display">
      <div className="expression">{expression}</div>
      <div className="result">{result}</div>
    </div>
  );
}

export default Display;
