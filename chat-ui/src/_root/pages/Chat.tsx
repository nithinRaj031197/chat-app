import ChatWindow from "@/components/shared/ChatWindow";
import ContactInfo from "@/components/shared/ContactInfo";
import Profile from "@/components/shared/Profile";
import Sidebar from "@/components/shared/Sidebar";
import { useState } from "react";

const Chat = () => {
  const [isProfile, setIsProfile] = useState(false);

  return (
    <div className="h-screen flex flex-row">
      {isProfile ? (
        <Profile setIsProfile={setIsProfile} />
      ) : (
        <Sidebar setIsProfile={setIsProfile} />
      )}

      <ChatWindow />
      {/* <ContactInfo /> */}
    </div>
  );
};

export default Chat;
