import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-2xl font-bold text-blue-600">🎓 Virtual Classroom</h1>
      <div className="space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
        <Link to="/student-dashboard" className="text-blue-600 hover:underline">Student Dashboard</Link>
        <Link to="/instructor-dashboard" className="text-purple-600 hover:underline">Instructor Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
