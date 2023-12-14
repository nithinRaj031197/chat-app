import { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MessageContext } from "@/context/MessageContext";

type Props = {};

const user = "user1";

const ChatRoom = (props: Props) => {
  const { messages } = useContext(MessageContext);

  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  const lastMessageRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  //   const handleScroll = () => {
  //     const chatContainer = chatContainerRef.current;
  //     if (chatContainer) {
  //       setIsScrolledToBottom(chatContainer.scrollTop + chatContainer.clientHeight >= chatContainer.scrollHeight);
  //     }
  //   };

  //   useEffect(() => {
  //     const chatContainer = chatContainerRef.current;
  //     chatContainer?.addEventListener("scroll", handleScroll);
  //     return () => {
  //       chatContainer?.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   const handleScrollToBottom = () => {
  //     if (chatContainerRef.current) {
  //       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  //     }
  //   };

  return (
    <div className="h-[80vh] p-5 relative">
      <div className="overflow-y-auto h-full" ref={chatContainerRef}>
        {messages?.map((message, index) => {
          const isUser1 = message.userId === user;
          const isLastMessage = index === messages.length - 1;
          return (
            <div
              key={message.messageId}
              className={`flex ${isUser1 ? "justify-end" : "justify-start"}`}
              ref={isLastMessage ? lastMessageRef : null}
            >
              <div
                className={`${
                  isUser1 ? "bg-blue-500 text-white rounded-bl-lg" : "bg-gray-300 text-black rounded-br-lg"
                } rounded-lg p-3 max-w-md`}
              >
                {message.content}
              </div>
            </div>
          );
        })}
      </div>

      {!isScrolledToBottom && (
        <div
          className="absolute right-10 bottom-10 rounded-full bg-gray-100 p-3"
          // onClick={handleScrollToBottom}
        >
          <IoIosArrowDown />
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
