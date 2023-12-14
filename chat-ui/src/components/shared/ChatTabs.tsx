import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatList from "./ChatList";
import GroupList from "./GroupList";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiUserFill } from "react-icons/ri";

export function ChatTabs() {
  return (
    <Tabs defaultValue="chats" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="chats" className="w-full text-lg font-semibold flex gap-2">
          <RiUserFill />
          Chats
        </TabsTrigger>
        <TabsTrigger value="groups" className="w-full text-lg font-semibold flex gap-2">
          <PiUsersThreeFill />
          Groups
        </TabsTrigger>
      </TabsList>
      <TabsContent value="chats" className="h-[78vh]">
        <ChatList />
      </TabsContent>
      <TabsContent value="groups">
        <GroupList />
      </TabsContent>
    </Tabs>
  );
}
