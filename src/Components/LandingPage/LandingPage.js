import React from "react";
import Banner from "../Banner/Banner";
import LessProductsGrid from "../LessProductsGrid/LessProductsGrid";
import { landingPageData } from "../../data/faker-landingPageData";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  let navigate = useNavigate();
  return (
    <>
      <Banner />
      <div onClick={() => navigate(`/products`)}>
        <LessProductsGrid
          trendingBrands
          item={landingPageData.trendingBrands}
          heading="SALE ON TOP BRANDS"
        />
      </div>
      <div onClick={() => navigate(`/products`)}>
        <LessProductsGrid
          biggestDeals
          item={landingPageData.biggestDeals}
          heading="BIGGEST DEALS"
        />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
