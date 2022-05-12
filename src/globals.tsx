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

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: var(--white-blue-300);
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--white-blue-300);
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--white-blue-300);
    }
    
    .flex-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export default GlobalStyle;
