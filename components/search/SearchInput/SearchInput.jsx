"use client";

import "./SearchInput.scss";
import InputText from "../../inputs/InputText/InputText";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
const SearchInput = ({ onSearch = () => {} }) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 800);

  useEffect(() => {
    if (!search || !debouncedSearch) return;
    onSearch(debouncedSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, onSearch]);

  return (
    <form
      className="search-input"
      id="SearchCountry"
      onSubmit={(e) => {
        e.preventDefault();
        return;
      }}
    >
      <InputText
        className="search-input__input"
        type="search"
        name="search"
        id="Search"
        placeholder="Type to search by name"
        value={search}
        onChange={(e) => {
          if (!e?.target.value?.trim()) {
            onSearch("");
          }
          setSearch(e.target.value);
        }}
        autoFocus
      />
    </form>
  );
};

export default SearchInput;
