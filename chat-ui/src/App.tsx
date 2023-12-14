import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./_auth/forms/SignUp";
import SignIn from "./_auth/forms/SignIn";
import AuthLayout from "./_auth/AuthLayout";
import ForgotPassword from "./_auth/forms/ForgotPassword";
import ResetPassword from "./_auth/forms/ResetPassword";
import Chat from "./_root/pages/Chat";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./_auth/ProtectedRoute";
import ProtectedRoutes from "./_auth/ProtectedRoute";

function App() {
  const context = useContext(AuthContext);
  console.log(context);
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>

        {/* private routes  */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Chat />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
