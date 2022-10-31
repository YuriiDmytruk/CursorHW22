import styled from "styled-components";

const COLOR = props => props.isValid ? "#00ff00" : "#ff3300"

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 3px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    outline: none !important;
    border:3px solid ${COLOR};
    box-shadow: 0 0 10px ${COLOR};
}
`;

export default Input;
