import { useState } from "react";
import { SearchContainer } from "./styles";


export default function Search(props: any) {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContainer>
            <h1>
                Bem Vindo a minha Versão Unsplash!
            </h1>
            <span>Todos créditos a Unsplash API</span>
            <div>
                <input id="searchInput" type="search" onChange={(e) => setSearchValue(e.target.value)}/>
                <button onClick={()=> props.search(searchValue)}>buscar</button>
            </div>
        </SearchContainer>
    )
}
