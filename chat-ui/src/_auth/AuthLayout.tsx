import { Outlet } from "react-router-dom";

const backgroundImageStyle = {
  backgroundImage: 'url("../public/auth_background.jpeg")',
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed", // Optional, keeps the background fixed while scrolling
  height: "100vh", // Adjust the height based on your design
};

const AuthLayout = () => {
  return (
    <section style={backgroundImageStyle} className="flex justify-center items-center ">
      <div className="bg-white w-1/4 p-3">
        <Outlet />
      </div>
    </section>
  );
};

export default AuthLayout;
