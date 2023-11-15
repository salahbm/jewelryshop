import Category from "./components/Category";
import Collection from "./components/Collection";
import HomeBanner from "./components/HomeBanner";
import Diamonds from "./components/OnHand";
import OurWork from "./components/OurWork";
const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Category />
      <Collection />
      <OurWork/>
      <Diamonds />

    </div>
  );
};

export default Home;
