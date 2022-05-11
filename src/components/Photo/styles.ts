import styled from "styled-components";

export const Card = styled.div`
    border-radius: .5rem .5rem;
    width: 350px;
    height: 300px;
    margin: 1rem;
    overflow: hidden;
    border-radius: .5rem;

    img {
        width: 100%;
        height: 100%;
        transition: all .2s;

                &:hover {
                    filter: brightness(.8);
                }
    }


    
    .data-info {
        position: relative;
        width: 100%;
        height: 50px;
        margin-top: -20%;
        background: rgba(0, 0, 0, .4);
        backdrop-filter: blur(3px);
            
        a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #fff;

            transition: all .2s;

            &:hover {
                filter: brightness(.8);
            }

            img {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                margin-inline: .5rem;
            }
        }
    }
`;