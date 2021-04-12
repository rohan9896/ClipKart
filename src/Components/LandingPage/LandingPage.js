import React from "react";
import Banner from "../Banner/Banner";
import LessProductsGrid from "../LessProductsGrid/LessProductsGrid";
import { landingPageData } from "../../data/faker-landingPageData";
import Footer from "../Footer/Footer";

function LandingPage() {
  return (
    <>
      <Banner />
      <LessProductsGrid
        trendingBrands
        item={landingPageData.trendingBrands}
        heading="SALE ON TOP BRANDS"
      />
      <LessProductsGrid
        biggestDeals
        item={landingPageData.biggestDeals}
        heading="BIGGEST DEALS"
      />
      <Footer />
    </>
  );
}

export default LandingPage;
