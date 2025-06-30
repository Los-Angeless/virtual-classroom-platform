import React from "react";
import LiveClass from "../components/LiveClass";
import AIQuizGenerator from "../components/AIQuizGenerator";
import DoubtAssistant from "../components/DoubtAssistant";

const InstructorDashboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-6">👨‍🏫 Instructor Dashboard</h1>

      {/* Live Class Component with Instructor Form */}
      <LiveClass />

      {/* AI Quiz Generator */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-green-700 mb-4">🧠 AI Quiz Generator</h2>
        <AIQuizGenerator />
      </div>

      {/* Doubt Assistant */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">🤖 AI Doubt Assistant</h2>
        <DoubtAssistant />
      </div>
    </div>
  );
};

export default InstructorDashboard;
