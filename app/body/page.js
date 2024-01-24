import React from "react";
import WatchAndShop from "./watchandshop";
import FlashSale from "./flashsale";
import ContactUS from "./contact";
import CustomerFeedback from "./feedback";
import Category from "./category";
import MenCollection from "./mencollection";
import WomenCollection from "./womencollection";
import ShopCategories from "./shopcategories";
import NewArrival from "./newarrival";
import TrendingWomenCollection from "./trendingwomencollection";
import JustForYou from "./justforyou";
import CustomFit from "./customfit";

const Body = () => {
  return (
    <div>
      <WatchAndShop />
      <FlashSale />
      <TrendingWomenCollection />
      <ShopCategories />
      <NewArrival />
      <WomenCollection />
      <JustForYou />
      <CustomFit />
      <MenCollection />
      <Category />
      <CustomerFeedback />
      <ContactUS />
    </div>
  );
};

export default Body;
