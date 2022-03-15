import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class RenderNumbers extends Component {
  suggestClassName = (item, index) => {
    if (item === 0) return 'number-container flex-2';
    if (index === 2) return 'number-container orange';
    return 'number-container';
  };

  render() {
    const { Items } = this.props;
    const [zero] = Items;
    return (
      <div className="numbers-container">
        {zero !== 0
          ? Items.map((item, index) => (
            <div
              className={index === 3 ? 'number-container orange' : 'number-container'}
              id={item}
              key={item}
            >
              <h3>{item}</h3>
            </div>
          ))
          : Items.map((item, index) => (
            <div className={this.suggestClassName(item, index)} id={item} key={item}>
              <h3>{item}</h3>
            </div>
          ))}
      </div>
    );
  }
}
