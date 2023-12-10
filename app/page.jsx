import { getCountries } from "@/services/countries";
import ItemCard from "@/components/cards/ItemCard/ItemCard";
import { shuffleArray } from "@/utils/arrayUtils";
import "./home.scss";
import HomeHeader from "@/components/home/HomeHeader";

const getData = async () =>
  await getCountries({
    service: "all",
    params: { fields: "name,flags,cca2,capital" },
  });

export default async function Home() {
  const countries = await getData();
  const shuffleCountries = shuffleArray(countries);

  return (
    <main className="home">
      <section className="home__wrapper">
        <HomeHeader countries={shuffleCountries} />

        <div className="home__items-container wrapper">
          {shuffleCountries.map((country) => (
            <ItemCard key={country.cca2} item={country} />
          ))}
        </div>
      </section>
    </main>
  );
}
