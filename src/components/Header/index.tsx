import { HeaderContainer, BrandLogo, ListMenu } from "./styles";
import logoHeader from '../../../public/nubes.svg';


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
            </ListMenu>
        </HeaderContainer>
    );
}