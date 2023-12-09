import { notFound } from "next/navigation";
import React from "react";

// fetch
const getData = async (CCA2) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${CCA2}`);
  if (!res?.ok) {
    notFound();
  }

  const jsonRes = await res.json();
  const firstResult = jsonRes[0];
  return firstResult;
};

// meta
export async function generateMetadata({ params: { countryCCA2 } }, parent) {
  const country = await getData(countryCCA2);

  return {
    title: `${country?.flag} ${country?.name?.common}`,
  };
}

// component
const CountryDetail = async ({ params: { countryCCA2 } }) => {
  const country = await getData(countryCCA2);
  console.log(`👁 ~ CountryDetail ~ country:`, country);

  return (
    <div>
      <h1>
        {country?.flag} {country?.name?.common}
      </h1>
      CountryDetail
      {JSON.stringify(country)}
    </div>
  );
};

export default CountryDetail;
