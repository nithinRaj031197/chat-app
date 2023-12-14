import Chats from "./Chats";
import Searchbar from "./Searchbar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Menu } from "./Menu";

type SidebarProps = {
  setIsProfile: (val: boolean) => void;
};

const Sidebar = ({ setIsProfile }: SidebarProps) => {
  return (
    <div className="border border-1 border-black flex-1">
      <div className="h-[7vh] p-2 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <Avatar
            className="w-12 h-12 cursor-pointer"
            onClick={() => setIsProfile(true)}
          >
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight pt-2">
            Nithin Raj
          </h2>
        </div>
        <div className="text-2xl">
          <Menu menuType="myProfile" />
        </div>
      </div>
      <Searchbar />
      <Chats />
    </div>
  );
};

export default Sidebar;
