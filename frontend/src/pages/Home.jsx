import React from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import Chatbot from "../components/Chatbot";

function Home() {
  return (
    <>
      <Header />
      <Features />

      {/* Chatbot Button */}
     <Chatbot />
    </>
  );
}

export default Home;
