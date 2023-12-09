"use client";
import SearchResults from "@/components/search/SearchResults/SearchResults";
import "./search.scss";
import SearchInput from "@/components/search/SearchInput/SearchInput";
import { useState } from "react";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchResults = (inputValue) => {
    setSearchValue(inputValue);
  };

  return (
    <main className="search-page ">
      <div className="search-page__wrapper wrapper">
        <div>
          <h1>Looking for a specific country?</h1>
          <h2>Type it below.</h2>
        </div>
        <SearchInput onSearch={searchResults} />
        <SearchResults searchValue={searchValue} />
      </div>
    </main>
  );
};

export default SearchPage;
