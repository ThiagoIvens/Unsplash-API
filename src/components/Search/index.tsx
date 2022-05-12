import { useState } from "react";
import { SearchContainer } from "./styles";


export default function Search(props: any) {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContainer>
            <h1>
                Welcome to Nubes!
            </h1>
            <span>A project using the <a href="https://unsplash.com/" target="_blank">Unsplash API</a>!</span>
            <div>
                <input id="searchInput" type="search" placeholder="Search..." onKeyUp={(e) => e.key === 'Enter' ? props.search(searchValue) : setSearchValue((e.target as HTMLInputElement).value) }/>
                <button onClick={() => props.search(searchValue)}>Buscar</button>
            </div>
        </SearchContainer>
    )
}