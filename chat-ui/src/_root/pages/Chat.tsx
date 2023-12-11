import ChatWindow from "@/components/shared/ChatWindow";
import ContactInfo from "@/components/shared/ContactInfo";
import Sidebar from "@/components/shared/Sidebar";

const Chat = () => {
  return (
    <div className="h-screen flex flex-row">
      <Sidebar />
      <ChatWindow />
      {/* <ContactInfo /> */}
    </div>
  );
};

export default Chat;
