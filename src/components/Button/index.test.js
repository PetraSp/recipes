import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';
import 'jest-styled-components';

describe('Button', () => {
  it('should render', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('background-color', '#2eb0a8');
    expect(tree).toHaveStyleRule('color', '#fff');
    expect(tree).toHaveStyleRule('border-radius', '4px');
  });
});
