"use client";

import ItemCard from "@/components/cards/ItemCard/ItemCard";
import { getCountries } from "@/services/countries";
import { useEffect, useState } from "react";
import "./SearchResults.scss";
const SearchResults = ({ searchValue }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchValue) {
      setResults([]);
      return;
    }
    setLoading(true);

    getCountries({
      service: "name",
      serviceValue: searchValue,
      params: { fields: "name,flags,cca2" },
    })
      .then((res) => setResults(res))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue]);

  return searchValue ? (
    <section className="search-results">
      {loading ? (
        <div className="search-results__loading">Cargando resultados...</div>
      ) : results?.length ? (
        // results
        <div className="search-results__results">
          {results.map((result) => (
            <ItemCard key={result.cca2} item={result} />
          ))}
        </div>
      ) : (
        // Empty
        <div className="search-results">
          <h3>
            Sorry, no results found. Please try a different search term. :(
          </h3>
        </div>
      )}
    </section>
  ) : // no search
  null;
};

export default SearchResults;
