import { getCountries } from "@/services/countries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// fetch
const getData = async (CCA2) => {
  const res = await getCountries({ service: "alpha", serviceValue: CCA2 });

  if (!res) {
    notFound();
  }

  const firstResult = res[0];
  return firstResult;
};

// meta
export async function generateMetadata({ params: { countryCCA2 } }, parent) {
  const country = await getData(countryCCA2);

  return {
    title: `${country?.name?.common} ${country?.flag}`,
  };
}

// component
const CountryDetail = async ({ params: { countryCCA2, ...rest } }) => {
  const country = await getData(countryCCA2);

  return (
    <div className="wrapper">
      <h1>
        {country?.flag} {country?.name?.common}{" "}
        {country?.name?.common != country?.name?.official ? (
          <i>{country?.name?.official}</i>
        ) : null}
      </h1>
      <h2>{country?.name?.official} </h2>

      <Image
        src={country.flags?.svg}
        width={200}
        height={150}
        alt={country.flags?.alt}
      />
      <Image
        src={country.coatOfArms?.svg}
        width={200}
        height={150}
        alt={country.coatOfArms?.name + "coat of arms"}
      />

      <table>
        <tbody>
          <tr>
            <th>region: {country?.region}</th>
          </tr>
          <tr>
            <th>subregion: {country?.subregion}</th>
          </tr>
          <tr>
            <th>capital: {country?.capital}</th>
          </tr>

          <tr>
            <th>population: {country?.population?.toLocaleString("es-ES")}</th>
          </tr>

          <tr>
            <th>area: {country?.area?.toLocaleString("es-ES")}</th>
          </tr>
        </tbody>
      </table>

      {!!country?.borders?.length ? (
        <section>
          {country?.borders?.map((borderCountry) => (
            <Link href={`/${borderCountry}`} key={borderCountry}>
              {borderCountry}
            </Link>
          ))}
        </section>
      ) : null}
    </div>
  );
};

export default CountryDetail;
