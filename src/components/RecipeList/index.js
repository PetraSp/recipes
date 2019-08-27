import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

import Card from '../Card';
import Container from '../Container';

function RecipeList(props) {
  const { recipes } = props;
  return (
    <Container>
      {recipes.map(recipe => (
        <Card key={uuidv1()} data={recipe} />
      ))}
    </Container>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object)
};

RecipeList.defaultProps = {
  recipes: []
};

export default RecipeList;
