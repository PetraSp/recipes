import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from './index';

describe('Input', () => {
  it('should render', () => {
    const tree = renderer.create(<Input containerWidth="350px" inputWidth="200px" />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children[0]).toHaveStyleRule('height', '35px');
    expect(tree).toHaveStyleRule('min-width', '350px');
    expect(tree.children[0]).toHaveStyleRule('min-width', '200px');
  });
});
