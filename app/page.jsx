import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res?.ok) {
    throw new Error("Failed to fetch countries");
  }
  return res.json();
};

export default async function Home() {
  const countries = await getData();

  return (
    <main>
      <h1>Countries</h1>
      <section>
        {countries.map((country) => (
          <Link href={`/countries/${country.cca2}`} key={country.cca2}>
            <article>
              <Image
                src={country.flags?.svg}
                width={40}
                height={40}
                alt={country.name?.common}
              />
              <h3>{country.name?.common}</h3>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
