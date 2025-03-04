import React, { useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Invalid input");
    } else {
      setResult(num1 + num2);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#4B0082",
        color: "#fff",
      }}
    >
      <h1>ADDING TWO NUMBERS</h1>
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          style={{
            margin: "20px",
            padding: "20px",
            width: "200px",
            backgroundColor: "#E6E6FA",
            border: "none",
            borderRadius: "4px",
            fontSize: "28px",
            textAlign: "center"

          }}
        />
      </div>
      <div>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          style={{
            margin: "20px",
            padding: "20px",
            width: "200px",
            backgroundColor: "#E6E6FA",
            border: "none",
            borderRadius: "4px",
            fontSize: "28px",
            textAlign: "center"
          }}
        />
      </div>
      <button
        onClick={calculate}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
          fontSize: "16px",
          backgroundColor: "#800080",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Add Them
      </button>
      {result !== null && (
        <div>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;
