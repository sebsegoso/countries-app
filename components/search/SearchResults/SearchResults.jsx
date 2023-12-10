"use client";

import ItemCard from "@/components/cards/ItemCard/ItemCard";
import { getCountries } from "@/services/countries";
import { useEffect, useState } from "react";
import "./SearchResults.scss";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
};

const animation = {
  variants,
  initial: "hidden",
  exit: "hidden",
  animate: "enter",
  transition: { duration: 1, ease: "easeInOut" },
};
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
        <motion.div key="loading" {...animation} className="search-results__loading">
          Loading results...
        </motion.div>
      ) : results?.length ? (
        // results
        <motion.div key="results" {...animation} className="search-results__results">
          {results.map((result) => (
            <ItemCard key={result.cca2} item={result} />
          ))}
        </motion.div>
      ) : (
        // Empty
        <motion.div key="empty" {...animation} className="search-results">
          <h3>
            Sorry, no results found. Please try a different search term. :(
          </h3>
        </motion.div>
      )}
    </section>
  ) : // no search
  null;
};

export default SearchResults;
