import { Navigate } from "react-router-dom";

const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

function ProtectedRoute({ children, role }) {
  const user = getUser();

  if (!user || !user.token) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
}

export default ProtectedRoute;
