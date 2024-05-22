import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import math from "mathjs";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      // Calculer le résultat lorsque "=" est cliqué
      try {
        const evalResult = math.evaluate(expression);
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      // Effacer l'expression lorsqu'on clique sur "C"
      setExpression("");
      setResult("");
    } else {
      // Ajouter la valeur du bouton à l'expression actuelle
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <div className="buttons">
        {/* Boutons numériques */}
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
