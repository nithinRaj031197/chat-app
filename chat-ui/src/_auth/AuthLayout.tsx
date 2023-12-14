import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const backgroundImageStyle = {
  backgroundImage: 'url("/auth_background.jpeg")',
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  height: "100vh",
};

const AuthLayout = () => {
  const { token } = useContext(AuthContext);

  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <section
      style={backgroundImageStyle}
      className="flex justify-center items-center "
    >
      <div className="bg-white w-full md:w-1/2 lg:w-1/3 xl:1/5 p-5 min-h-96 rounded-xl flex justify-center items-center mx-4  ">
        <Outlet />
      </div>
    </section>
  );
};

export default AuthLayout;
