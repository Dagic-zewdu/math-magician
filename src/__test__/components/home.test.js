import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/home/home';

describe('should render without problems', () => {
  it('should render the home page', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
