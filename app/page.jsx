import { getCountries } from "@/services/countries";
import "./home.scss";
import ItemCard from "@/components/cards/ItemCard/ItemCard";
import { shuffleArray } from "@/utils/arrayUtils";

const getData = async () =>
  await getCountries({
    service: "all",
    params: { fields: "name,flags,cca2" },
  });

export default async function Home() {
  const countries = await getData();
  const shuffleCountries = shuffleArray(countries)
  return (
    <main className="home">
      <section className="home__wrapper wrapper">
        <h1>CountriesApp</h1>
        
        <div className="home__items-container">
          {shuffleCountries.map((country) => (
            <ItemCard key={country.cca2} item={country} />
          ))}
        </div>
      </section>
    </main>
  );
}
