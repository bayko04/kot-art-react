import FirstSection from "../../components/FirstSection/FirstSection";
import BatBanner from "../../components/BatBanner/BatBanner";
import KotAuth from "../../components/KotAuth/KotAuth";
import Advantages from "../../components/Advantages/Advantages";
import AllCategories from "../../components/AllCategories/AllCategories";
import NewItems from "../../components/NewItems/NewItems";
import SelectedArt from "../../components/SelectedArt/SelectedArt";
import BuyOnline from "../../components/BuyOnline/BuyOnline";
import NewItems2 from "../../components/NewItems2/NewItems2";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* <Header />
      <UnderHeader /> */}
      <FirstSection />
      {/* <DiscoverStyle /> */}
      <AllCategories />
      {/* <FindArt /> */}
      <NewItems />
      <NewItems2 />
      {/* <Team /> */}
      <SelectedArt />
      <BatBanner />
      <BuyOnline />
      <Advantages />
      <KotAuth />
    </div>
  );
};

export default HomePage;
