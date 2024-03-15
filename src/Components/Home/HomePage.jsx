import React from "react";
import {
  Navbar,
  Banner,
  Brands,
  Services,
  AboutUs,
  Portfolio,
  Footer,
} from "../index";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import Questions from "./Questions/Questions";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Brands />
      <Services />
      <AboutUs />
      <Portfolio />
      <Questions />
      <ProjectDetails />
    </>
  );
};

export default HomePage;
