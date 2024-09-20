import React from "react";

const About = () => {
  return (
    <div className="bg-light-gray min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl text-[#500042] font-extrabold text-center mb-6">Welcome to TravelX</h1>
        <p className="about-text text-gray-800 text-lg mb-6">
          TravelX is your ultimate travel companion, offering a seamless and
          delightful experience for all your travel needs. Whether you're a
          seasoned globetrotter or planning your first adventure, we're here to
          make your journey extraordinary.
        </p>
        
        <div className="services-section mb-8">
          <h2 className="text-3xl text-[#500042] font-semibold">Services</h2>
          <ul className="list-disc list-inside text-gray-800 text-lg mb-4">
            <li>Flights</li>
            <li>Tours</li>
            <li>Hotels</li>
          </ul>
          <p className="about-text text-gray-800 text-lg">
            Explore the world with our comprehensive services, providing you with
            the best deals and options. From exotic destinations to cozy
            accommodations, TravelX has everything you need to create lasting
            memories.
          </p>
        </div>

        <div className="mission-section mb-8">
          <h2 className="text-3xl text-[#500042] font-semibold">Our Mission</h2>
          <p className="about-text text-gray-800 text-lg">
            At TravelX, we are on a mission to make your travel experiences
            unforgettable. We strive to provide convenience and quality, ensuring
            your journey is filled with joy and relaxation. Our dedicated team
            works tirelessly to bring you the best travel solutions, so you can
            focus on what matters most – enjoying the adventure.
          </p>
        </div>

        <div className="contact-section">
          <h2 className="text-3xl text-[#500042] font-semibold">Contact Us</h2>
          <p className="about-text text-gray-800 text-lg">
            Have questions or need assistance? Reach out to our friendly support
            team at <a href="mailto:support@travelx.com" className="text-[#500042] underline">support@travelx.com</a>. We're here to help you every step of the
            way, from planning your trip to ensuring a smooth travel experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
