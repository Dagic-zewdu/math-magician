import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const { next = '', operation = '', total = null } = this.props;
    return (
      <div
        className="g-item gray"
        style={{
          gridColumn: '1/5',
          justifyContent: 'flex-end',
          fontSize: '4rem',
        }}
      >
        {next || operation || total || '0'}
      </div>
    );
  }
}

export default Display;
