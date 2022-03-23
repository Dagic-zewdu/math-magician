import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../../components/calculator/display.value';

describe('should render without problems', () => {
  it('should render the display calculator', () => {
    const tree = renderer.create(<Display next="1" operation="+" total={100} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
