import styled from "styled-components"

const SearchContainer = styled.div`

    $shadow: .3rem .3rem .6rem var(--gray-250), -.2rem -.2rem .5rem var(--gray-950);
    $inner-shadow: inset .2rem .2rem .5rem var(--gray-250), inset -.2rem -.2rem .5rem var(--gray-950);

    padding: 3rem 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1, span {
        color: var(--white-blue-300);
    }

    div {
        padding-block: 1.5rem;

        input {
            font-size: 20px;
            border: none;
            padding: 10px 40px;
            border-radius: 1rem;
            color: #6D7587;
            background-color: var(--back-color);
            box-shadow: 7px 7px 15px rgba(55, 84, 170, .15),
                        -7px -7px 20px rgba(255, 255, 255, 1),
                        inset 0px 0px 4px rgba(255, 255, 255, .2),
                        inset 7px 7px 15px rgba(55, 84, 170, 0),
                        inset -7px -7px 20px rgba(255, 255, 255, 0),
                        0px 0px 4px rgba(255, 255, 255, 0) !important;
            transition: box-shadow .25s ease !important;
        }

        input:focus {
            outline:none !important;
        }

        input:focus {  
            box-shadow: 7px 7px 15px rgba(55, 84, 170, .15),
                        -7px -7px 20px rgba(255, 255, 255, 1),
                        inset 0px 0px 4px rgba(255, 255, 255, 0),
                        inset 7px 7px 15px rgba(55, 84, 170, .15),
                        inset -7px -7px 20px rgba(255, 255, 255, 1),
                        0px 0px 4px rgba(255, 255, 255, .2) !important;
        }
    }
`;

export function Search() {
    return (
        <SearchContainer>
            <h1>
                Bem Vindo a minha Versão Unsplash!
            </h1>
            <span>Todos créditos a Unsplash API</span>
            <div>
                <input type="text" />
            </div>
        </SearchContainer>
    )
}