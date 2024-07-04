import React from "react"
import Header from "../../components/Header/Header"
import FirstSection from "../../components/FirstSection/FirstSection"
import FindArt from "../../components/FindArt/FindArt"
import Team from "../../components/Team/Team"
import BatBanner from "../../components/BatBanner/BatBanner"
import KotAuth from "../../components/KotAuth/KotAuth"
import Advantages from "../../components/Advantages/Advantages"
import Footer from "../../components/Footer/Footer"

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <FirstSection />
            <FindArt />
            <Team />
            <BatBanner />
            <KotAuth />
            <Advantages />
            <Footer />
        </div>
    )
}

export default HomePage
