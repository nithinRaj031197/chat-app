import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./_auth/forms/SignUp";
import SignIn from "./_auth/forms/SignIn";
import Main from "./_root/pages/Main";
import AuthLayout from "./_auth/AuthLayout";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>

        {/* private routes  */}
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
