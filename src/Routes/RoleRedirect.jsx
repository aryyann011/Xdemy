import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/Authcontext";

const RoleRedirect = () => {
  const { user, isLoading, OpenloginModal } = useAuth();

  if (isLoading) return null;

  if (!user){
    OpenloginModal()
    return <Navigate to="/landing" replace />;
  }

  const role = user.user_metadata?.role;

  if (role === "student") {
    return <Navigate to="/student/home" replace />;
  }

  if (role === "teacher") {
    return <Navigate to="/teacher/dashboard" replace />;
  }

  return <Navigate to="/landing" replace />;
};

export default RoleRedirect;
