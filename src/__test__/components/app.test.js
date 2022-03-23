import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App';

describe('should render without problems', () => {
  it('should render the routes properly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
