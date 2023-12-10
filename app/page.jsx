import { getCountries } from "@/services/countries";
import ItemCard from "@/components/cards/ItemCard/ItemCard";
import { shuffleArray } from "@/utils/arrayUtils";
import "./home.scss";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const getData = async () =>
  await getCountries({
    service: "all",
    params: { fields: "name,flags,cca2,capital" },
  });

export default async function Home() {
  const countries = await getData();
  const shuffleCountries = shuffleArray(countries);
  const randomItem =
    shuffleCountries[Math.floor(Math.random() * shuffleCountries.length)];

  return (
    <main className="home">
      <section className="home__wrapper">
        {randomItem ? (
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
        ) : null}

        <div className="home__items-container wrapper">
          {shuffleCountries.map((country) => (
            <ItemCard key={country.cca2} item={country} />
          ))}
        </div>
      </section>
    </main>
  );
}
