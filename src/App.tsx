import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import Search from "./components/Search";

import GlobalStyle from "./globals";
import Photo from "./components/Photo";
import { ContainerFlex } from "./AppStyles";
import Footer from "./components/Footer";

interface ApiProps {
  description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    html: string;
    download: string;
  };
  user: {
    username: string;
    name: string;
    portfolio_url: string;
    links: {
      html: string;
      portfolio: string;
    };
    profile_image: {
      small: string;
    };
  };
}

export default function App() {
  const [results, setResults] = useState([]);

  async function handleSearch(search: string) {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos/?client_id=59nlfS54cKwxhwBA162QGHJx5rpwGcMMxUZxP1KeYGo&query=" +
        search
    );

    setResults(response.data.results);
  }

  return (
    <>
      <Header />
      <Search search={handleSearch} />

      <ContainerFlex>
        {results.length > 0 &&
          results.map((result: ApiProps) => <Photo result={result} />)}
      </ContainerFlex>
        <Footer />
      <GlobalStyle />
    </>
  );
}
