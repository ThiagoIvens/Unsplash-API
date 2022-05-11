import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--white-blue-700);
    border-top: 1px solid var(--white-blue-300);

    height: 50px;

    color: var(--white-blue-300);
    font-size: 24px;
    
    a {
        text-decoration: none;
        color: var(--white-blue-300);
        cursor: pointer;
    }
`;