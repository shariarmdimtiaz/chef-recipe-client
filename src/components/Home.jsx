import React, { useContext, useState } from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import Chef from "../components/Chef";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs";
import QA from "./QA";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const chefs = useLoaderData();
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div>
      <div className="mx-auto">
        <Banner></Banner>
      </div>
      <div className="container mx-auto">
        <div className="md:py-12">
          <h1 className="font-bold text-5xl text-black py-5">
            Popular Chefs in South Korea
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {chefs.map((chef) => (
              <Chef key={chef._id} chef={chef}></Chef>
            ))}
          </div>
        </div>
      </div>
      <AboutUs></AboutUs>
      <QA></QA>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
