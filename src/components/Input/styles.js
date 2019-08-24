import Styled from 'styled-components';
import COLOR_PALETTE, { FONT_FAMILY } from '../../Constants';

const StyledInputContainer = Styled.div`
    display: inline-flex;
    min-width: ${props => props.containerWidth};
`;

const StyledInputBox = Styled.input`
  min-width: ${props => props.inputWidth};
  box-shadow: 0 0 0 4px ${COLOR_PALETTE.green};
  font-family: ${FONT_FAMILY};
  flex: 1 0 auto;
  border: 0;
  height: 35px;
  font-size: 15px;
  font-weight: 500;
  display: inline-block;
  padding: 11px;
  border-radius: 3px;
  color: ${COLOR_PALETTE.black};
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: 0;
  }
  ::placeholder {
    color: ${COLOR_PALETTE.darkGrey};
  }
`;

export default StyledInputContainer;
export { StyledInputBox };
