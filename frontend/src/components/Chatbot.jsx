import React, { useState, useEffect, useRef } from "react";
// import { assets } from "../assets/assets"; // Importing assets properly
import chatbotIcon from "../assets/chatbot.png"; // Direct import


function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Toggle chatbot window
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle user message send
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCp7jIer1bP-7z-84XDJCXqRrvA2oLahTA",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: input }] }],
          }),
        }
      );

      const data = await response.json();
      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand that.";

      setMessages((prevMessages) => [...prevMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Error reaching chatbot.", sender: "bot" }]);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button with PNG Image */}
      <div className="fixed bottom-2 right-4 z-50">
        <button onClick={toggleChat}>
        <img src={chatbotIcon} alt="Chatbot" className="w-24 h-24" />
        


        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-72 bg-white border rounded-lg shadow-lg p-3 mb-11">
          <div className="h-64 overflow-y-auto border-b mb-2">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-3 py-1 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Field */}
          <div className="flex">
            <input
              type="text"
              className="flex-1 border p-2 rounded-l w-3/4"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded-r">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
