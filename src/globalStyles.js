import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Encode Sans Expanded', sans-serif;        
    } 
  
`;

export const Button = styled.button`
  border-radius: 50px;
  background-color: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ primary }) => (primary ? "#fff" : "#010606")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;
  border: none;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    color: ${({ primary }) => (primary ? "#010606" : "#fff")};
  }
`;

export default GlobalStyle;
