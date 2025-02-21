import React, { useEffect } from "react";
import { assets } from "../assets/assets"; // Assuming your assets are in a separate file
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Chatbot from "./Chatbot";

function Features() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <>
    
    <div className="container mx-auto py-16 font-outfit mt-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-secondary-" data-aos="zoom-in">
        Our Features
      </h1> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 group">
        {[ 
          { icon: assets.Icon01, title: "Networking", description: "Connect with alumni and students to build valuable professional relationships." },
          { icon: assets.Icon02, title: "Mentorship", description: "Find mentors who can guide you through your career journey." },
          { icon: assets.Icon03, title: "Webinars", description: "Attend informative webinars led by industry professionals." },
          { icon: assets.Icon04, title: "Discussion Forums", description: "Engage in discussions and share insights with your peers." },
          { icon: assets.Icon05, title: "Career Guidance", description: "Access resources and advice to help navigate your career path." }
        ].map((feature, index) => (
          <div
            key={index}
            className="feature-card transform transition-transform duration-400 group-hover:rotate-0 hover:scale-95 hover:rotate-0"
            data-aos="fade-up"
            data-aos-delay={`${10 * (index + 1)}`}
          >
            <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-medium mb-2 text-primary">{feature.title}</h3>
            <p className="text-secondary text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/roleselection")}
          className="bg-blue-900 text-white font-light py-3 px-8 rounded-full shadow-lg hover:bg-[#6985c5] transition-all duration-300"
          data-aos="zoom-in"
        >
          Join Now
        </button>
      </div>
    </div>
    <Chatbot />
    </>
    
  );
}

export default Features;