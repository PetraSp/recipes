import React from 'react';
import PropTypes from 'prop-types';
import StyledInputContainer, { StyledInputBox } from './styles';

function Input(props) {
  const { containerWidth, inputWidth } = props;

  return (
    <StyledInputContainer containerWidth={containerWidth}>
      <StyledInputBox {...props} inputWidth={inputWidth} />
    </StyledInputContainer>
  );
}

Input.propTypes = {
  containerWidth: PropTypes.string,
  inputWidth: PropTypes.string
};

Input.defaultProps = {
  containerWidth: 'auto',
  inputWidth: 'auto'
};
export default Input;
