import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Menu } from "./Menu";

type Props = {};

const ChatHeader = (props: Props) => {
  return (
    <div className="h-[10vh] bg-slate-300 flex flex-row justify-between p-2">
      <div className="flex items-center ml-5 gap-3">
        <Avatar>
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback>NR</AvatarFallback>
        </Avatar>

        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          John Doe
        </h3>
      </div>

      <div className="flex items-center text-2xl mr-5 ">
        <Menu menuType="userProfile" />
      </div>
    </div>
  );
};

export default ChatHeader;
