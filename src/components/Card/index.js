import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import CardContainer, {
  CardFooter,
  CardHeader,
  CardImage,
  RibbonWrapper,
  CardRibbon,
  CardRibbonText,
  ActionContainer
} from './styles';
import ingredientsStringToArray, { hasLactose } from '../../utils/recipes';
import Button from '../Button';

function Card(props) {
  const { data } = props;
  function handleFavorite(event) {
    console.log('stop');
    event.stopPropagation();
  }
  return (
    <CardContainer href={data.href} target="_blank">
      {hasLactose(data.ingredients) && (
        <RibbonWrapper>
          <CardRibbon>
            <CardRibbonText>Has lactose</CardRibbonText>
          </CardRibbon>
        </RibbonWrapper>
      )}
      <div>
        <CardImage src={data.thumbnail} />
        <CardHeader>
          <span>{data.title}</span>
        </CardHeader>
        <CardFooter>
          <ul>
            {ingredientsStringToArray(data.ingredients).map(ingredient => (
              <li key={uuidv1()}>{ingredient}</li>
            ))}
          </ul>
        </CardFooter>
      </div>
      <ActionContainer>
        <Button onClick={event => handleFavorite(event)}>Make favorite</Button>
      </ActionContainer>
    </CardContainer>
  );
}

Card.propTypes = {
  data: PropTypes.object
};

Card.defaultProps = {
  data: {}
};

export default Card;
