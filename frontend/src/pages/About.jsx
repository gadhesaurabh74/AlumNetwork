import React from "react";
import { motion } from "framer-motion";
import Chatbot from "../components/Chatbot";

function About() {
  return (
    <>
    <Chatbot />
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 font-serif text-gray-900 max-w-4xl mx-auto bg-white rounded-lg shadow-2xl mt-16">
      {/* Header Section */}
      <h1 className="flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-600 mb-6">
        <span className='text-black'>About</span> <span className='text-black'>Us</span>
      </h1>
      
      {/* Animated Image */}
      <motion.img
        src="https://dam.athabascau.ca/GF7L4P38/as/6wh6ssv665b3g8fh8tbss95/connect-with-fellow-students-and-alumni"
        alt="Community"
        className="rounded-lg shadow-lg mx-auto w-full h-64 object-cover mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Welcome Section */}
      <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
        <span className="font-bold text-blue-900">Welcome!</span> This platform is more than just a space—it's a dynamic hub where you can <span className="text-gray-900 font-semibold">connect, learn,</span> and <span className="text-gray-900 font-semibold">grow together.</span> Whether you’re an alumnus, a student, or an industry professional, there’s something valuable waiting for you here!
      </p>
      
      {/* Features Section */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4">Why Join Us?</h2>
      <ul className="list-disc list-inside mb-6 text-gray-800 text-lg">
        <li className="mb-3"><span className="text-gray-900 font-semibold">🤝 Networking:</span> Build meaningful connections with fellow alumni and professionals.</li>
        <li className="mb-3"><span className="text-gray-900 font-semibold">🎓 Mentorship:</span> Gain guidance from experienced mentors in your field.</li>
        <li className="mb-3"><span className="text-gray-900 font-semibold">📅 Events & Webinars:</span> Participate in industry-leading workshops and events.</li>
        <li className="mb-3"><span className="text-gray-900 font-semibold">🚀 Career Growth:</span> Access career resources, job opportunities, and resume-building tools.</li>
        <li className="mb-3"><span className="text-gray-900 font-semibold">🏆 Celebrating Achievements:</span> Showcase success stories and inspire others in the community.</li>
      </ul>
      
      {/* Animated Section Divider */}
      <motion.div
        className="flex justify-center my-8"
        initial={{ width: "0%" }}
        animate={{ width: "20%" }}
        transition={{ duration: 1.5 }}
      >
        <div className="border-t-4 border-dotted text-gray-900 w-full"></div>
      </motion.div>
      
      {/* Community Image */}
      <motion.img
        src="https://specials-images.forbesimg.com/imageserve/65fb34a45e253140736dc172/960x0.jpg"
        alt="Teamwork"
        className="rounded-lg shadow-lg mx-auto w-full h-100 object-cover mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      
      {/* Additional Image */}
      {/* <motion.img
        src="https://pixabay.com/photos/office-business-team-technology-620822/"
        alt="Collaboration"
        className="rounded-lg shadow-lg mx-auto w-full h-64 object-cover mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      /> */}
      
      {/* Closing Statement */}
      <p className="text-lg md:text-xl text-gray-800 text-center font-medium">
        Join us on this <span className="text-gray-900 font-semibold">exciting journey</span>. Together, we create lasting memories and build a future full of opportunities!
      </p>
    </div>
    </>
  );
}

export default About;