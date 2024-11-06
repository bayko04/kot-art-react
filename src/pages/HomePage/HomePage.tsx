import React from "react";
import Header from "../../components/Header/Header";
import FirstSection from "../../components/FirstSection/FirstSection";
import FindArt from "../../components/FindArt/FindArt";
import Team from "../../components/Team/Team";
import BatBanner from "../../components/BatBanner/BatBanner";
import KotAuth from "../../components/KotAuth/KotAuth";
import Advantages from "../../components/Advantages/Advantages";
import Footer from "../../components/Footer/Footer";
import DiscoverStyle from "../../components/DiscoverStyle/DiscoverStyle";
import AllCategories from "../../components/AllCategories/AllCategories";
import NewItems from "../../components/NewItems/NewItems";
import SelectedArt from "../../components/SelectedArt/SelectedArt";
import BuyOnline from "../../components/BuyOnline/BuyOnline";
import UnderHeader from "../../components/UnderHeader/UnderHeader";
import NewItems2 from "../../components/NewItems2/NewItems2";

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
      <Footer />
    </div>
  );
};

export default HomePage;
