import React from "react";
import {
  HeroSection,
  Navbar,
  Sidebar,
  InfoSection,
  Services,
  Footer,
} from "../components";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
