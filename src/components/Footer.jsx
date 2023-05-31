import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import icon from "../assets/icon.png";

const Footer = () => {
  return (
    <footer className="bg-[#1A1919] text-white py-10">
      <div className="container mx-auto py-12 px-4">
        <div className="pb-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <div className="flex items-center">
              <img className="w-12 px-2" src={icon} alt="" />
              <h1 className="text-black font-bold text-2xl">
                <span className="text-blue-700">GREASY</span>{" "}
                <span className="text-[#ff7f00]">CHEF</span>
              </h1>
            </div>
            <p className="font-light text-left py-3">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-left ps-5">Company</h3>
            <ul className="list-none text-left ps-5">
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Work</a>
              </li>
              <li className="mb-2">
                <a href="#">Latest News</a>
              </li>
              <li className="mb-2">
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-left ps-5">Product</h3>
            <ul className="list-none text-left ps-5">
              <li className="mb-2">
                <a href="#">Prototype</a>
              </li>
              <li className="mb-2">
                <a href="#">Plans & Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#">Customers</a>
              </li>
              <li className="mb-2">
                <a href="#">Integration</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-left ps-5">Support</h3>
            <ul className="list-none text-left ps-5">
              <li className="mb-2">
                <a href="#">Help Desk</a>
              </li>
              <li className="mb-2">
                <a href="#">Sales</a>
              </li>
              <li className="mb-2">
                <a href="#">Become a Partner</a>
              </li>
              <li className="mb-2">
                <a href="#">Developers</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-left ps-5">Contact</h3>
            <p className="text-left ps-5">524 Broadway , NYC</p>
            <p className="text-left ps-5">+1 777 - 978 - 5570</p>
            <div className="text-left">
              <h2 className="text-lg font-bold mb-4 pt-2 ps-5">Follow Us</h2>
              <ul className="flex ps-5 -mt-5">
                <li>
                  <a
                    href="#"
                    className="text-gray-100 hover:text-gray-200 mr-4 px-2"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-100 hover:text-gray-200 mr-4 px-2"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-100 hover:text-gray-200 mr-4 px-2"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="container mx-auto px-4 md:flex justify-between ">
        <div>
          <p>@2023 GREASY CHEF. All Rights Reserved</p>
        </div>
        <div>
          <p>Powered by GREASY CHEF</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
