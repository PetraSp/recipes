import React from 'react';
import CardContainer, {
  CardFooter,
  CardContent,
  CardHeader,
  CardImage,
  RibbonWrapper,
  CardRibbon,
  CardRibbonText
} from './styles';
import ingredientsStringToArray, { hasLactose } from '../../utils/recipes';

function Card(props) {
  const { data } = props;
  return (
    <CardContainer href={data.href} target="_blank">
      {hasLactose(data.ingredients) && (
        <RibbonWrapper>
          <CardRibbon>
            <CardRibbonText>Has lactose</CardRibbonText>
          </CardRibbon>
        </RibbonWrapper>
      )}
      <CardImage src={data.thumbnail} />
      <CardContent>
        <CardHeader>
          <span>{data.title}</span>
        </CardHeader>
        <CardFooter>
          <ul>
            {ingredientsStringToArray(data.ingredients).map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
