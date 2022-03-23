import React from 'react';
import Calculator from './basic.calculator';
import CalculatorContainer from './calculator.style';

function CalcContainer() {
  return (
    <CalculatorContainer>
      <h1 className="do-math">
        Let
        {'\''}

        s do some math
      </h1>
      <Calculator />
    </CalculatorContainer>
  );
}

export default CalcContainer;
