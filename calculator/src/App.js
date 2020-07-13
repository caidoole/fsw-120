import React, { useState } from 'react';
import './App.css';
import InputFactors from './calculatorFrame/InputFactors';
import Computations from './calculatorFrame/Computations'

const App = () => {

  const [currentResult, setCurrentResult] = useState('');
  const [clearResult, setClearResult] = useState(false);

  const onClick = button => {

    if (button === 'C') {
      reset();
    }
    else if (button === '=') {
      calculate(currentResult)
    } else {
      clearResult ? setCurrentResult(button) : setCurrentResult(currentResult + button);
      setClearResult(false);
    }
  };

  const calculate = (previousResult) => {
    let newResult = Function(`"use strict"; return (${previousResult})`)();
    setCurrentResult(newResult);
    setClearResult(true);
  };

  const reset = () => {
    setCurrentResult('');
  };

  return (
    <div className='calculatorBody'>
      <Computations currentResult={currentResult} />
      <InputFactors onClick={onClick} />
    </div>
  )
}

export default App;