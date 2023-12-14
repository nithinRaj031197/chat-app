import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {};

const ProtectedRoutes = (props: Props) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/sign-in" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoutes;
