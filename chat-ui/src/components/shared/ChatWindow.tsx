import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import ChatRoom from "./ChatRoom";

type Props = {};

const ChatWindow = (props: Props) => {
  return (
    <div className="border border-1 border-black flex flex-col flex-[3]">
      <ChatHeader />
      <ChatRoom />
      <ChatFooter />
    </div>
  );
};

export default ChatWindow;
