import React, { Component } from 'react';
import RenderNumbers from './number.container';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="calc-container">
          <div className="display-number">
            <h2 className="float-right white">0</h2>
          </div>
          <RenderNumbers Items={['AC', '+/-', '%', '/']} />
          <RenderNumbers Items={[7, 8, 9, '*']} />
          <RenderNumbers Items={[4, 5, 6, '-']} />
          <RenderNumbers Items={[1, 2, 3, '+']} />
          <RenderNumbers Items={[0, '.', '=']} />
        </div>
      </div>
    );
  }
}
