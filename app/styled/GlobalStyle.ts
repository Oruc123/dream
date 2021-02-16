import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    overflow-x: hidden;
        font-family: system-ui;
        font-size: 100%;
        color: ${({ theme: { palette } }) => palette.darkest};
        background-color: ${({ theme: { palette } }) => palette.bgBody};
  }
  *{
    box-sizing:border-box;
    
  }
  *, :after, :before {
    border: 0px solid ${({ theme: { palette } }) => palette.border};
  }

  a{
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme: { palette } }) => palette.darkest};
  }
  p,span,a,button{
    vertical-align: middle;

  }
  img{
    max-width: 100%;
  }
  input:focus{
    outline: none;
  }
  button{
    border: none;
   cursor: pointer;
    background: transparent;
    &:focus,&:active{
      outline: none;
    }
  }
  h3{
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme: { palette } }) => palette.darkest};
  }
`;

export default GlobalStyle;
