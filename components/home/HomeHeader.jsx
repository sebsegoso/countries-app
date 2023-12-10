"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const HomeHeader = ({ countries = [] }) => {
  const [index, setIndex] = useState(0);
  const randomItem = useMemo(() => {
    return countries[index];
  }, [index, countries]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(Math.floor(Math.random() * countries?.length));
    }, 1000 * 10);

    return () => {
      clearInterval(interval);
    };
  }, [countries?.length]);

  return randomItem ? (
    <header className="home__header">
      <div className="home__header__wrapper wrapper">
        <h1 className="">CountriesApp</h1>
        <h3>
          Did you know... {randomItem?.capital} is the capital of{" "}
          <Link
            href={{
              pathname: `/countries/${randomItem?.cca2}`,
            }}
          >
            {randomItem?.name?.common}
          </Link>{" "}
          <Image
            src={randomItem?.flags?.svg}
            width={18}
            height={12}
            alt={randomItem?.flags?.alt || randomItem?.name?.common}
          />
          ?
        </h3>
      </div>
    </header>
  ) : null;
};

export default HomeHeader;
