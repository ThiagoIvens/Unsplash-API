import { HeaderContainer, BrandLogo, ListMenu } from "./styles";
import logoHeader from '../../../public/nubes.svg';


export function Header() {
    return (
        <HeaderContainer>
            <BrandLogo>
                <a href="/"><img src={logoHeader} alt="Logo Unsplash" /></a>
            </BrandLogo>
            <ListMenu>
                <li>
                    <a href="/">Home</a>
                </li>
            </ListMenu>
        </HeaderContainer>
    );
}