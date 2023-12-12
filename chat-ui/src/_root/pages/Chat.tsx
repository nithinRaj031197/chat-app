import ChatWindow from "@/components/shared/ChatWindow";
import ContactInfo from "@/components/shared/ContactInfo";
import Profile from "@/components/shared/Profile";
import Sidebar from "@/components/shared/Sidebar";

const Chat = () => {
  return (
    <div className="h-screen flex flex-row">
      {/* <Sidebar /> */}
      <Profile />
      <ChatWindow />
      {/* <ContactInfo /> */}
    </div>
  );
};

export default Chat;
