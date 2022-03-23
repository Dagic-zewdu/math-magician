import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../components/quote/quote';

describe('should render without problems', () => {
  it('should render the quote page', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
