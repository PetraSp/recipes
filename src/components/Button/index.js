import Styled from 'styled-components';

const Button = Styled.button`
  display: inline-block;
  border: 0;
  outline: 0;
  margin-top: 16px;
  padding: 14px 16px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  background-color: #2eb0a8;
  color: #fff;
  
  :hover {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    box-shadow: 0 3px 5px rgba(0,0,0,.12);
  }
}
  `;

export default Button;
