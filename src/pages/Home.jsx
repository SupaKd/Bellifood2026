import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Bestsellers from "../components/Bestsellers";
import Menu from "../components/Menu";
import Featured from "../components/Featured";
import Location from "../components/Location";

function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Bestsellers />
      <Menu />
      <Featured />
      <Location />
    </main>
  );
}

export default Home;