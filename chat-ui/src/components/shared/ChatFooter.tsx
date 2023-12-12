import { IoMdAdd } from "react-icons/io";
import { FaMicrophoneAlt } from "react-icons/fa";
import { BaseSyntheticEvent, KeyboardEvent, useContext, useEffect, useRef, useState } from "react";
import { Message, MessageContext } from "@/context/MessageContext";
import { Input } from "../ui/input";

type Props = {};

const ChatFooter = (props: Props) => {
  const { setMessages } = useContext(MessageContext);

  const [message, setMessage] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const [isMe, setisMe] = useState(true);

  const handleMessage = (e: BaseSyntheticEvent) => {
    setMessage(e.target.value);
  };

  const handleKeyboardEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setMessages((prev: any) => {
        return [
          ...prev,
          { content: message, userId: isMe ? "user1" : "user2", messageId: new Date().getTime().toString() },
        ];
      });

      setMessage("");

      setisMe((prev) => !prev);
    }
  };
  return (
    <div className="h-[10vh] bg-slate-300 flex justify-between items-center p-10 gap-3">
      <div className="text-2xl bg-gray-100 rounded-full p-2 cursor-pointer">
        <IoMdAdd />
      </div>
      <div className="flex-1 ">
        <Input
          ref={inputRef}
          value={message}
          className="w-full p-2 rounded-lg text-lg focus:outline-none focus:border-none focus-visible:border-none focus-visible:outline-non"
          onChange={handleMessage}
          onKeyDown={handleKeyboardEvent}
          placeholder="Type a message..."
        />
      </div>
      <div className="text-2xl bg-gray-100 rounded-full p-2 cursor-pointer">
        <FaMicrophoneAlt />
      </div>
    </div>
  );
};

export default ChatFooter;
