import styled from "styled-components";
import logoHeader from '../../public/logo.svg';


const HeaderContainer = styled.header`
    overflow: hidden;
    padding: 1rem 5rem;
    background: transparent;
    display: flex;
    justify-content: space-between;
`;

const BrandLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100px;
        height: 50px;
    }
`;

const ListMenu = styled.ul`
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


export function Header() {
    return (
        <HeaderContainer>
            <BrandLogo>
                <img src={logoHeader} alt="Logo Unsplash" />
            </BrandLogo>
            <ListMenu>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">sla</a>
                </li>
            </ListMenu>
        </HeaderContainer>
    );
}