import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    
      <div className="App">
      <div className="Brand">_HexCalc</div>
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          <div className="row">
            {'789/'.split('').map((symbol) => (
              <button onClick={() => handleButtonClick(symbol)}>{symbol}</button>
            ))}
          </div>
          <div className="row">
            {'456*'.split('').map((symbol) => (
              <button onClick={() => handleButtonClick(symbol)}>{symbol}</button>
            ))}
          </div>
          <div className="row">
            {'123-'.split('').map((symbol) => (
              <button onClick={() => handleButtonClick(symbol)}>{symbol}</button>
            ))}
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick('0')}>0</button>
            <button onClick={calculateResult}>=</button>
            <button onClick={clearInput}>C</button>
            <button onClick={() => handleButtonClick('+')}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
