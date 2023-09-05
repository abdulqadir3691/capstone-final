import HeroSec from "@/app/sections/Herosec/HeroSec";
import FeatureProducts from "@/app/sections/FeaturedProducts/Products";
import ProductsUpdate from "@/app/sections/ProductsUpdate/ProductsUpdate";
import NewestProducts from "@/app/sections/NewestProducts/NewestProducts";
import React from "react";
import Reviews from "@/app/sections/Reviews/Reviews";
import BestOfferCard from "@/app/sections/BestOffer/BestOfferCard";
import TopCatagoryProduct from "@/app/sections/TopCatagory/CarouselComponent";
import FollowUs from "@/app/sections/FollowUs/FollowUS";

const HomePage = () => {
  return (
    <div>
      <HeroSec />
      <FeatureProducts />
      <ProductsUpdate />
      <TopCatagoryProduct />
      <BestOfferCard />
      <NewestProducts />
      <Reviews />
      <FollowUs />
    </div>
  );
};

export default HomePage;
