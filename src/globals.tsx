import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: var(--white-blue-700);
        font-family: Open-Sans, Helvetica, Sans-Serif;
        overflow-x: scroll;
        margin-bottom: 50px;
    }
    
    .flex-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export default GlobalStyle;
