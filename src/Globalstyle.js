import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        border: 0px;
        padding: 0px;
        box-sizing: border-box;
        margin: 0;
    }

    
    body {
        background: linear-gradient(130.02deg, #1B998B 0.66%, #9E366D 83.32%);        
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`