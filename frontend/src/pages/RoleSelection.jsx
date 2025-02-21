import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState("student");
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col mt-10 items-center justify-center h-screen bg-cover bg-center bg-no-repeat text-white font-poppins"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?education,technology')" }}
    >
      <div className="text-center mb-6 bg-black bg-opacity-50 p-4 rounded-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold">Join Alumni Connect</h1>
        <p className="text-lg opacity-80">Stay Connected. Grow Together.</p>
      </div>

      {/* Role Selection Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-full transition duration-300 ${
            selectedRole === "student" ? "bg-orange-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => setSelectedRole("student")}
        >
          Student
        </button>
        <button
          className={`px-6 py-2 rounded-full transition duration-300 ${
            selectedRole === "alumni" ? "bg-orange-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => setSelectedRole("alumni")}
        >
          Alumni
        </button>
      </div>

      {/* Student Registration Card */}
      <div
        className={`w-1/3 p-6 text-center bg-blue-50 text-blue-900 rounded-lg shadow-lg transform transition duration-300 ${
          selectedRole === "student" ? "scale-105" : "hidden"
        }`}
      >
        <img src={assets.Student} alt="Student" className="w-32 h-24 mx-auto mb-4 object-contain" />
        <h2 className="text-2xl font-semibold">Register as Student</h2>
        <p className="mt-2">Find alumni, join events, and grow your network 
          easily now
        </p>
        <button
          onClick={() => navigate("/student-register")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Register
        </button>
      </div>

      {/* Alumni Registration Card */}
      <div
        className={`w-1/3 p-6 text-center bg-green-50 text-green-900 rounded-lg shadow-lg transform transition duration-300 ${
          selectedRole === "alumni" ? "scale-105" : "hidden"
        }`}
      >
        <img src={assets.Alumni} alt="Alumni" className="w-32 h-24 mx-auto mb-4 object-contain" />
        <h2 className="text-2xl font-semibold">Register as Alumni</h2>
        <p className="mt-2">Connect with students, share experiences, and contribute.</p>
        <button
          onClick={() => navigate("/alumni-register")}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Register
        </button>
      </div>

      {/* Login Section */}
      <div className="mt-4 bg-black bg-opacity-50 p-2 rounded-lg">
        <p>
          Have an Account?{" "}
          <a href="/login" className="text-orange-500 font-bold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RoleSelection;

