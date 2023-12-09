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
        <SearchInput onSearch={searchResults} />
        <SearchResults searchValue={searchValue} />
      </div>
    </main>
  );
};

export default SearchPage;
