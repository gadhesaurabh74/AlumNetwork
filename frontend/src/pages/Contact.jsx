// import { Contact } from "lucide-react";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent! Our support team will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-16">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full">
        <div className="p-8 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Alumni Connect Support</h1>
          <p className="mt-2 text-gray-600">
            We’re here to help you with any questions or issues you may have.
          </p>
        </div>

        {/* Contact Form */}
        <form className="p-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your issue or question"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* FAQ Section */}
        <div className="p-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-2">
            {[
              { question: "How do I reset my password?", answer: "Go to the login page and click on 'Forgot Password?'. Follow the instructions to reset your password." },
              { question: "How can I connect with alumni?", answer: "Use the search feature to find alumni and send a connection request or start a chat." },
              { question: "Can I edit my profile after signing up?", answer: "Yes! You can update your profile anytime from the Settings section in your dashboard." },
              { question: "Is there a way to schedule a video call with alumni?", answer: "Yes, you can request a video call, and the alumni will schedule it at a suitable time." },
              { question: "How do I report inappropriate content?", answer: "Click on the 'Report' button on posts and messages to alert the support team." },
              { question: "Can I access the platform on mobile devices?", answer: "Yes! Our platform is mobile-friendly and works on all major browsers." },
              { question: "How do I delete my account?", answer: "You can request account deletion from the Settings page. Contact support if you need help." },
            ].map((faq, index) => (
              <details key={index} className="border border-gray-200 rounded-md p-4">
                <summary className="cursor-pointer font-medium text-gray-700">{faq.question}</summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
