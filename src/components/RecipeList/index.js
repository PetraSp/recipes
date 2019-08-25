import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import Styled from 'styled-components';
import Card from '../Card';

const RecipesContainer = Styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 90%;
  
  @media (min-width: 500px) {
     max-width: 70%;
  }
  
  @media (min-width: 768px) {
     max-width: 708px;
  }
`;

function RecipeList(props) {
  const { recipes } = props;
  return (
    <RecipesContainer>
      {recipes.map(recipe => (
        <Card key={uuidv1()} data={recipe} />
      ))}
    </RecipesContainer>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object)
};

RecipeList.defaultProps = {
  recipes: []
};

export default RecipeList;
