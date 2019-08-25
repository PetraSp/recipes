import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

function RecipeList(props) {
  const { recipes } = props;
  return (
    <div>
      {recipes.map(recipe => (
        <span key={uuidv1()}>{recipe.title}</span>
      ))}
    </div>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object)
};

RecipeList.defaultProps = {
  recipes: []
};

export default RecipeList;
