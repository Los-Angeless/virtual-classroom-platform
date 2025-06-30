import React from 'react';
import Navbar from '../components/Navbar';
import StudentDashboard from '../components/StudentDashboard';
import InstructorDashboard from '../components/InstructorDashboard';

const Home = () => {
  // 👉 Simulated logged-in user role
  const userRole = "student"; // Change to "instructor" to test instructor view

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          {userRole === "student" ? "🎓 Student Dashboard" : "👨‍🏫 Instructor Dashboard"}
        </h2>
        {userRole === "student" ? <StudentDashboard /> : <InstructorDashboard />}
      </div>
    </div>
  );
};

export default Home;
