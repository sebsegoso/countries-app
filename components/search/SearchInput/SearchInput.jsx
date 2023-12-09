"use client";

import CustomButton from "@/components/buttons/CustomButton";
import "./SearchInput.scss";
import InputText from "../../inputs/InputText/InputText";
import { useState } from "react";
const SearchInput = ({ onSearch = () => {} }) => {
  const [search, setSearch] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();

    if (!search?.trim()) return;

    onSearch(search);
  };

  return (
    <form className="search-input" id="SearchCountry" onSubmit={submitSearch}>
      <InputText
        className="search-input__input"
        type="search"
        name="search"
        id="Search"
        placeholder="Type to search by name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          if (!e?.target.value?.trim()) {
            onSearch("");
          }
        }}
      />
      <CustomButton
        className="search-input__button"
        type="submit"
        form="SearchCountry"
      >
        🔎
      </CustomButton>
    </form>
  );
};

export default SearchInput;
