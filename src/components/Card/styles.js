import Styled from 'styled-components';

const CardContainer = Styled.a`
  margin: 20px 0;
  min-width: 100%;
  background: #fafafa;
  border: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  @media only screen and (min-width: 768px) {
    min-width: calc(50% - 40px);
    margin: 20px;
    width: calc(50% - 40px);
  }
`;

const CardFooter = Styled.div`
 margin: 10px 0;
`;

const CardContent = Styled.div`
  padding: 10px 20px;
`;

const CardHeader = Styled.div`
  border-bottom: 1px solid rgba(#121212, 0.1);
  span {
    font-size: 16px;
    line-height: 1.8;
    font-weight: 600;
    color: #121212;
  }
`;

const RibbonWrapper = Styled.div`
  position: relative;
  top: -10px;
  right: -10px;
`;

const CardRibbon = Styled.div`
  position: absolute;
    right: 0;
    overflow: hidden;
    width: 114px;
    height: 112px;
    transform: scaleX(-1);
  &::before,
  &::after {
      position: absolute;
      z-index: -1;
      content: "";
      display: block;
      border: 5px solid darkred;
      border-top-color: transparent;
      border-left-color: transparent;
    }
  &::before {
      top: 0;
      right: 0;
    }
  &::after {
      bottom: 0;
      left: 0;
    }
  }
`;

const CardRibbonText = Styled.span`
  position: absolute;
  display: block;
  width: 160px;
  padding: 10px 0;
  margin-bottom: 20px;
  background-color: orangered;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;
  left: -35px;
  top: 25px;
  transform: rotate(-45deg) scaleX(-1);
`;

const CardImage = Styled.img`
width: 120px;
height: 80px;
margin: 20px 20px 0 20px;
border-radius: 10px;
`;

export default CardContainer;
export {
  CardFooter,
  CardContent,
  CardHeader,
  CardImage,
  RibbonWrapper,
  CardRibbon,
  CardRibbonText
};