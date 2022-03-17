import React from 'react';

const Display = ({ next = '', operation = '', total = null }) => (
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

export default Display;
