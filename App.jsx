import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleGenerate = () => {
    const num = parseInt(input);

    if (isNaN(num) || num < 1) {
      setOutput(["Invalid input"]);
      return;
    }

    const count = num % 2 === 0 ? num - 1 : num;
    const sequence = [];
    for (let i = 0; i < count; i++) {
      sequence.push(2 * i + 1);
    }

    setOutput(sequence);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h2 className="heading">Odd Number Sequence Generator</h2>
        <div className="input-group">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a number"
            className="input"
          />
          <button onClick={handleGenerate} className="button">
            Generate
          </button>
        </div>
        <div className="output">
          <strong>Output:</strong> {output.join(", ")}
        </div>
      </div>
    </div>
  );
}

export default App;
