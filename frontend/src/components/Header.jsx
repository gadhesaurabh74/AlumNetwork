import React, { useEffect } from "react";
import AlumniImage from "../assets/About.png"; // Image of an alumnus
import WhyConnectImage from "../assets/Banner 1.png"; // "Why Connect" image
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center space-y-24 px-6 lg:px-16 py-12 mt-20">
      {/* Section 1: Alumni Introduction */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-6xl gap-12">
        {/* Left: Alumni Image */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <img
            src={AlumniImage}
            alt="Alumnus Description"
            className="w-96 rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left" data-aos="fade-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Connect with Your Alumni Network
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Stay connected with your alumni community and gain valuable insights 
            into career opportunities, mentorship, and networking. Build 
            meaningful relationships that help shape your future.
            Alumni networks foster business partnerships, investment
            opportunities, and startup collaborations.
          </p>
          <button
            onClick={() => navigate("/roleselection")}
            className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition-transform duration-300 transform hover:scale-105"
            data-aos="fade-up"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Section 2: Why Connect? */}
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between w-full max-w-6xl gap-12">
        {/* Right: Why Connect Image */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <img
            src={WhyConnectImage}
            alt="Why Connect?"
            className="w-96 rounded-lg shadow-lg"
          />
        </div>

        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left" data-aos="fade-right">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why Connect with Alumni?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Connecting with alumni gives you access to mentorship, career guidance, 
            and networking opportunities. Stay ahead by learning from the experiences 
            of those who have walked the same path before you.
            Stay involved in college events, reunions, and initiatives that help 
            shape the next generation of students
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
