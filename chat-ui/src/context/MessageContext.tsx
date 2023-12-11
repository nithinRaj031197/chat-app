import React, { createContext, useState } from "react";
import data from "../messages.json";

export type Message = {
  messageId: string;
  userId: string;
  content: string;
  timestamp: string;
  status: string;
  reactions: { userId: string; emoji: string }[];
  attachments: never[]; // Update this if attachments have a different structure
};

export const MessageContext = createContext<{
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}>({
  messages: [],
  setMessages: () => {},
});

const MessageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState(data.messages);
  return <MessageContext.Provider value={{ messages, setMessages }}>{children}</MessageContext.Provider>;
};

export default MessageContextProvider;
