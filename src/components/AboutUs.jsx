import React from "react";
import logo from "../assets/icon.png";
const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-gray-100 border-0 rounded-xl">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-bold text-5xl text-black py-5">About Us</h2>
            <p className="mt-2 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
              Who We Are
            </p>
            <p className="text-center text-xl text-gray-500">
              Our food recipe website is dedicated to bringing you the best
              recipes from around the world. Our team of experienced chefs and
              food bloggers are passionate about food and creating delicious
              recipes that are easy to follow and perfect for any occasion. We
              believe that cooking should be fun and approachable, and our
              recipes reflect that philosophy.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-medium text-gray-900">Our Mission</h3>
            <p className="text-center text-xl text-gray-500">
              Our mission is to inspire people to cook and eat delicious,
              healthy food. We believe that cooking is a vital life skill that
              everyone should have, and we're committed to making it fun and
              easy for people to learn. We're also passionate about using fresh,
              wholesome ingredients that are good for you and good for the
              planet.
            </p>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-medium text-gray-900">Our Team</h3>
            <p className="text-center text-xl text-gray-500">
              Our team consists of experienced chefs, food bloggers, and recipe
              developers who are passionate about creating delicious and healthy
              recipes. We're always testing and tweaking our recipes to make
              them even better, and we love sharing our knowledge and experience
              with others. We're also committed to creating a community of food
              lovers who can share their own recipes and experiences with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
