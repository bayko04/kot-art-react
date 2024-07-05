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

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <FirstSection />
      <DiscoverStyle />
      <AllCategories />
      <FindArt />
      <NewItems />
      <Team />
      <SelectedArt />
      <BatBanner />
      <BuyOnline />
      <KotAuth />
      <Advantages />
      <Footer />
    </div>
  );
};

export default HomePage;
