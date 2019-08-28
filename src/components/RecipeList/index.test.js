import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '.';
import Recipes from '../../mocks/recipes';

describe('Recipe List', () => {
  it('should render', () => {
    const tree = renderer.create(<RecipeList />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children).toEqual(null);
  });
  it('should render list of recipes', () => {
    const tree = renderer.create(<RecipeList recipes={Recipes} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toEqual(10);
  });
});
