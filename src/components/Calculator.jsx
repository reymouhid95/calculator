import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import math from "mathjs";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <div className="buttons">
        {[...Array(10).keys()].map((num) => (
          <Button
            key={num}
            value={num.toString()}
            onClick={handleButtonClick}
          />
        ))}
        {/* Autres boutons */}
        <Button value="+" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} />
        <Button value="*" onClick={handleButtonClick} />
        <Button value="/" onClick={handleButtonClick} />
        <Button value="." onClick={handleButtonClick} />
        <Button value="C" onClick={handleButtonClick} />
        <Button value="=" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Calculator;
