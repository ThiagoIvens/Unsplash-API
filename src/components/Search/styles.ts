import styled from "styled-components";

export const SearchContainer = styled.div`

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
            background-color: var(--back-color);
            border-radius: 20px 0px 0px 20px;
            background: linear-gradient(145deg, #bbc3d5, #dfe8fe);
            box-shadow:  0px 5px 10px #5e626b,
                        -3px -5px 10px #ffffff;
            transition: box-shadow .25s ease !important;
        }

        input:focus {
            outline:none !important;
        }

        button {
            cursor: pointer;
            color: var(--white-blue-300);
            font-size: 20px;
            border: none;
            padding: 10px 40px;
            background-color: var(--back-color);
            border-radius: 0px 20px 20px 0px;
            background: linear-gradient(145deg, #dfe8fe, #bbc3d5);
                box-shadow:  5px 5px 10px #5e626b,
                             0 -5px 10px #ffffff;
            transition: box-shadow .25s ease !important;
        }
    }
`;