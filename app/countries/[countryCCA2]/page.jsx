import { getCountries } from "@/services/countries";
import Image from "next/image";
import { notFound } from "next/navigation";
import "./countryDetail.scss";

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
    description: `${country?.capital} is the capital of ${country?.name?.common}`,
  };
}

// component
const CountryDetail = async ({ params: { countryCCA2, ...rest } }) => {
  const country = await getData(countryCCA2);

  return (
    <main className="wrapper country-detail">
      <section className="country-detail__basic ">
        <div className="country-detail__names">
          <h1>
            {country?.flag} {country?.name?.common}
          </h1>
          <h2>{country?.name?.official} </h2>
        </div>
        <Image
          className="country-detail__flag"
          src={country.flags?.svg}
          width={200}
          height={134}
          alt={country.flags?.alt}
        />
      </section>

      <section className="country-detail__more ">
        {country.coatOfArms?.svg ? (
          <figure>
            <Image
              className="country-detail__coat-of-arms"
              src={country.coatOfArms?.svg}
              width={200}
              height={200}
              alt={country.coatOfArms?.name + "'s coat of arms"}
            />
            <figcaption>
              {country?.name?.common}
              {"'"}s coat of arms
            </figcaption>
          </figure>
        ) : null}

        <table className="country-detail__table">
          <tbody>
            <tr>
              <th>independent:</th>
              <td> {country?.independent ? "✓" : "❌"}</td>
            </tr>
            <tr>
              <th>continent:</th>
              <td> {country?.continents}</td>
            </tr>
            <tr>
              <th>region:</th>
              <td> {country?.region}</td>
            </tr>
            <tr>
              <th>subregion:</th>
              <td> {country?.subregion}</td>
            </tr>
            <tr>
              <th>capital:</th>
              <td> {country?.capital}</td>
            </tr>

            <tr>
              <th>population:</th>
              <td> {country?.population?.toLocaleString("en-US")}</td>
            </tr>

            <tr>
              <th>area:</th>
              <td>
                {" "}
                {country?.area?.toLocaleString("en-US")} m<sup>2</sup>
              </td>
            </tr>
          </tbody>
        </table>

        <a
          href={country?.maps?.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
        >
          See on Maps
        </a>
      </section>
    </main>
  );
};

export default CountryDetail;
