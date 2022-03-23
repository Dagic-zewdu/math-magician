import React, { useState } from 'react';
import calculate from '../../Logic/calculate';
import Display from './display.value';

const Calculator = () => {
  const [state, setState] = useState({ next: '', total: null, operation: '' });
  const handleClick = (e) => {
    setState((state) => calculate(
      {
        next: state.next,
        total: state.total,
        operation: state.operation,
      },
      e.target.innerHTML,
    ));
  };
  const { total, next, operation } = state;
  return (
    <div className="container">
      <div className="d-grid gray">
        <Display next={next} operation={operation} total={total} />
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          AC
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          +/-
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          %
        </button>
        <button
          type="button"
          className="g-item orange"
          onClick={handleClick}
        >
          &divide;
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          7
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          8
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          9
        </button>
        <button
          type="button"
          className="g-item orange"
          onClick={handleClick}
        >
          x
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          4
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          5
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          6
        </button>
        <button
          type="button"
          className="g-item orange"
          onClick={handleClick}
        >
          -
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          1
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          2
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          3
        </button>
        <button
          type="button"
          className="g-item orange"
          onClick={handleClick}
        >
          +
        </button>
        <button
          type="button"
          className="g-item white"
          style={{ gridColumn: '1/3' }}
          onClick={handleClick}
        >
          0
        </button>
        <button
          type="button"
          className="g-item white"
          onClick={handleClick}
        >
          .
        </button>
        <button
          type="button"
          className="g-item orange"
          onClick={handleClick}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
