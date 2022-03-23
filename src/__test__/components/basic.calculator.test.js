import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../../components/calculator/basic.calculator';

describe('should render without problems', () => {
  it('should render the calculator', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
