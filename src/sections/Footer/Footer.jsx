import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h1 className="text-2xl font-semibold mb-4">Navigation</h1>
          <ul className="list-none">
            <li className="mb-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Services</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h1 className="text-2xl font-semibold mb-4">Social Media</h1>
          <ul className="list-none">
            <li className="mb-2">
              <a href="/">Facebook</a>
            </li>
            <li className="mb-2">
              <a href="/">Twitter</a>
            </li>
            <li className="mb-2">
              <a href="/">LinkedIn</a>
            </li>
            <li className="mb-2">
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
          <h1 className="text-2xl font-semibold mb-4">Support</h1>
          <ul className="list-none">
            <li className="mb-2">
              <Link to="/">FAQ</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Terms and Conditions</Link>
            </li>
            <li className="mb-2">
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 p-4">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <p className="mb-2">
            Address: 123 Main St, City, Country
          </p>
          <p className="mb-2">
            Email: info@example.com
          </p>
          <p className="mb-2">
            Phone: +1 (123) 456-7890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
