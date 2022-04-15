import "./App.css";
import { useState } from "react";
import simpleMath from "ldg-simple-math-mo";

function App() {
  const [display, setDisplay] = useState([]);

  function displayValues(a, b) {
    return [
      `${a} + ${b} = ${simpleMath.add(a, b)}`,
      `${a} - ${b} = ${simpleMath.substract(a, b)}`,
      `${a} * ${b} = ${simpleMath.multiply(a, b)}`,
      `${a} / ${b} = ${simpleMath.divide(a, b)}`,
    ];
  }

  function calculate(e) {
    e.preventDefault();
    setDisplay(displayValues(e.target[0].value, e.target[1].value));
  }

  return (
    <div className="App">
      <div id="calculate">
        <form onSubmit={calculate}>
          <p>What is the first number?</p>
          <input type="number" min="0" />
          <p>What is the second number?</p>
          <input type="number" min="0" />
          <br></br>
          <br></br>
          <button>Calculate</button>
        </form>
        <div>
          {display.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
