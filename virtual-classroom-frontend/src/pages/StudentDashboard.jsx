// src/pages/StudentDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import LiveClass from "../components/LiveClass";
import AIQuizGenerator from "../components/AIQuizGenerator";
import DoubtAssistant from "../components/DoubtAssistant";



function StudentDashboard() {

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Welcome, Student!</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Classes */}
        <div className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">📅 Upcoming Live Classes</h3>
          <LiveClass /> {/* ✅ ONLY shows classes */}
        </div>

        {/* Progress */}
        <div className="bg-green-50 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-green-700 mb-2">📈 Your Progress</h3>
          <p className="text-gray-700 text-sm">You’ve completed 75% of your current courses!</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-green-600 h-2.5 rounded-full w-3/4"></div>
          </div>
        </div>

        {/* AI Tools */}
        <div className="bg-yellow-50 p-4 rounded-lg shadow hover:shadow-lg transition col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold text-yellow-700 mb-2">🧠 AI Tools</h3>
          <p className="text-gray-700 text-sm mb-4">
            Use the AI Quiz Generator and Doubt Assistant to enhance your learning.

          </p>

          <div
            onClick={() => navigate("/ai-quiz")}
            className="cursor-pointer bg-purple-100 hover:bg-purple-200 text-purple-900 font-semibold p-6 rounded-xl shadow-md transition"
          >
            🧠 Generate AI Quiz
          </div>


          <div className="space-y-6">
            <div className="bg-white p-4 rounded shadow">



            </div>
            <div className="bg-white p-4 rounded shadow">
              <DoubtAssistant />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
