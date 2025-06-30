import React, { useState } from "react";

const AIQuizGenerator = () => {
  const [topic, setTopic] = useState("");
  const [quizResult, setQuizResult] = useState("");
  const [loading, setLoading] = useState(false);

const handleGenerateQuiz = async () => {
  const token = localStorage.getItem('token');
  console.log('🔐 JWT Token:', token); // ✅ Check this in DevTools Console

  if (!token) {
    alert('You are not logged in!');
    return;
  }

  try {
    const res = await fetch('http://localhost:8081/api/quiz/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // ✅ This sends the JWT
      },
      body: JSON.stringify({ topic: 'java' }),
    });

    if (!res.ok) {
      console.error('❌ Response not OK:', res.status);
      throw new Error('Failed to generate quiz');
    }

    const data = await res.json();
    console.log('Quiz generated:', data);
  } catch (err) {
    console.error('Error generating quiz:', err);
  }
};



  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🧠 AI Quiz Generator</h2>

      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic (e.g. Java, AI in Education)"
        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
      />

      <button
        onClick={handleGenerateQuiz}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>

      {quizResult && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg whitespace-pre-wrap border">
          <h3 className="text-lg font-semibold mb-2">📝 Quiz Output</h3>
          <p>{quizResult}</p>
        </div>
      )}
    </div>
  );
};

export default AIQuizGenerator;
