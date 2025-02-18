import FirstSection from "../../components/FirstSection/FirstSection";
import BatBanner from "../../widgets/BatBanner/BatBanner";
import KotAuth from "../../components/KotAuth/KotAuth";
import Advantages from "../../widgets/Advantages/Advantages";
import AllCategories from "../../widgets/AllCategories/AllCategories";
import NewItems from "../../widgets/NewItems/NewItems";
import SelectedArt from "../../widgets/SelectedArt/SelectedArt";
import BuyOnline from "../../widgets/BuyOnline/BuyOnline";
import NewItems2 from "../../widgets/NewItems2/NewItems2";
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
