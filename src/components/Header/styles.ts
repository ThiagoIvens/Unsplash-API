import styled from "styled-components";

export const HeaderContainer = styled.header`
    overflow: hidden;
    padding: 1rem 5rem;
    background: transparent;
    display: flex;
    justify-content: space-between;
`;

export const BrandLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100px;
        height: 50px;
    }
`;

export const ListMenu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
        margin-inline: .5rem;

        a {
        text-decoration: none;
        color: var(--white-blue-300);
        
        transition: all 0.3s;

        &:hover {
            filter: brightness(.95);
        }
    }  
    } 
`;