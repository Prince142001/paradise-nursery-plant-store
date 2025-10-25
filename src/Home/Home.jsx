import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  //   const backgroundImageUrl = "../assets/home-bg.jpg";
  const backgroundImageUrl =
    "https://www.ingreenhouses.com/wp-content/uploads/2016/08/nen-bijeenkomst-meetmethoden-optische-eigenschappen-klein.jpg";

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white p-8"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Title, Subtitle, Button */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Welcome To
              <br />
              Paradise Nursery
            </h1>
            <div className="w-24 h-1.5 bg-green-500 rounded-full my-6"></div>
            <p className="text-xl sm:text-2xl text-green-100 font-light mb-8">
              Where Green Meets Serenity
            </p>
            <NavLink
              to="product-page"
              className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Get Started
            </NavLink>
          </div>

          {/* Right Column: Body Text */}
          <div className="space-y-5 text-base sm:text-lg text-gray-200 font-light">
            <p>Welcome to Paradise Nursery, where green meets serenity!</p>
            <p>
              At Paradise Nursery, we are passionate about bringing nature
              closer to you. Our mission is to provide a wide range of
              high-quality plants that not only enhance the beauty of your
              surroundings but also contribute to a healthier and more S
              sustainable lifestyle. From air-purifying plants to aromatic
              fragrant ones, we have something for every plant enthusiast.
            </p>
            <p>
              Our team of experts is dedicated to ensuring that each plant meets
              our strict standards of quality and care. Whether you're a
              seasoned gardener or just starting your green journey, we're here
              to support you every step of the way. Feel free to explore our
              collection, ask questions, and let us help you find the perfect
              plant for your home or office.
            </p>
            <p>
              Join us in our mission to create a greener, healthier world. Visit
              Paradise Nursery today and experience the beauty of nature right
              at your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
