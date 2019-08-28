import React from 'react';
import renderer from 'react-test-renderer';
import Search from './index';

describe('Search', () => {
  it('should render Search', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
