import React, { useState } from "react";

const DoubtAssistant = () => {
  const [doubt, setDoubt] = useState("");
  const [response, setResponse] = useState("");

  const handleAskDoubt = () => {
    // Mock AI response for now
    setResponse(`🤖 AI says: Great question! Here's a detailed explanation on "${doubt}"...`);
    setDoubt(""); // Clear input
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg my-4">
      <h2 className="text-xl font-bold mb-4">💬 AI Doubt Assistant</h2>
      <textarea
        className="w-full p-3 border rounded-md mb-4"
        rows="4"
        placeholder="Type your doubt here..."
        value={doubt}
        onChange={(e) => setDoubt(e.target.value)}
      />
      <button
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
        onClick={handleAskDoubt}
        disabled={!doubt.trim()}
      >
        Ask Doubt
      </button>
      {response && (
        <div className="mt-4 bg-gray-100 p-3 rounded text-gray-800">
          {response}
        </div>
      )}
    </div>
  );
};

export default DoubtAssistant;
