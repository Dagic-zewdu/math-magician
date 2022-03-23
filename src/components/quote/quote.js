import React from 'react';
import { QouteContainer, QouteList } from './quote.style';

function Quote() {
  return (
    <QouteContainer>
      <p>This is awesome quote that bright ur day </p>
      <QouteList>
        <li>Positive anything is better than negative nothing</li>
        <li>Miracles happen to those who believe in them </li>
        <li>One small positive thought can change your whole day </li>
        <li> Believe you can and you’re halfway there</li>
        <li> Write it on your heart that every day is the best day in the year.</li>
      </QouteList>
    </QouteContainer>
  );
}

export default Quote;
