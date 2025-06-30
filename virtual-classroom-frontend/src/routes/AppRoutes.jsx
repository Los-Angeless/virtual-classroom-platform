import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import StudentDashboard from "../pages/StudentDashboard";
import InstructorDashboard from "../pages/InstructorDashboard";
import StudentDashboard from '../pages/StudentDashboard';
import AIQuizGenerator from "./components/AIQuizGenerator";


function AppRoutes() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/student" element={user?.role === "STUDENT" ? <StudentDashboard /> : <Navigate to="/login" />} />
      <Route path="/instructor" element={user?.role === "INSTRUCTOR" ? <InstructorDashboard /> : <Navigate to="/login" />} />
      <Route path="/live-classes" element={<LiveClass />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/ai-quiz" element={<AIQuizGenerator />} />

      

      
    </Routes>
  );
}

export default AppRoutes;
