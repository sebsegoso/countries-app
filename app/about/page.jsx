import Image from "next/image";
import "./about.scss";
import Link from "next/link";

const APP_NAME = "CountriesApp";
const AboutPage = () => {
  return (
    <main className="about-page">
      <Image
        className="about-page__image"
        src="/about.webp"
        alt="about"
        width={960}
        height={1080}
      />
      <div className="about-page__content wrapper">
        <h1>About us</h1>
        <p>
          At <Link href="/">{APP_NAME}</Link>, we´ve crafted a unique experience
          for you to explore and learn more about countries across our planet.
          Our app combines the thrill of discovery with the fun of games,
          offering a delightful journey to uncover the diversity of nations.
        </p>

        <p>
          Immerse yourself in the world of geography, challenge your knowledge
          with engaging quizzes, and embark on a journey of flag guessing.
          Whether you´re a seasoned traveler or just curious about the world,{" "}
          <Link href="/">{APP_NAME}</Link> is your gateway to discovering
          fascinating facts and enhancing your global awareness.
        </p>

        <p>
          Join us on this exciting adventure as we make learning about countries
          not only informative but also entertaining. Explore, play, and broaden
          your horizons with <Link href="/">{APP_NAME}</Link>.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
