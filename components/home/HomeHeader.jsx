"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};
const HomeHeader = ({ countries = [] }) => {
  const [index, setIndex] = useState(0);
  const randomItem = useMemo(() => {
    return countries[index];
  }, [index, countries]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(Math.floor(Math.random() * countries?.length));
    }, 1000 * 5);

    return () => {
      clearInterval(interval);
    };
  }, [countries?.length]);

  return randomItem ? (
    <header className="home__header">
      <div className="home__header__wrapper wrapper">
        <h1 className="">CountriesApp</h1>
        <h3>
          Did you know...{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              exit="hidden"
              animate="enter"
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {randomItem?.capital} is the capital of{" "}
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
            </motion.span>
          </AnimatePresence>
        </h3>
      </div>
    </header>
  ) : null;
};

export default HomeHeader;
