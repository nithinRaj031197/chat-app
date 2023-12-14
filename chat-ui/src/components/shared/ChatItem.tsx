import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {};

const ChatItem = (props: Props) => {
  return (
    <div className="h-20 bg-slate-200  border-b-2 border-white flex gap-3 items-center p-2">
      <Avatar className="w-14 h-14">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex justify-between w-full">
        <div>
          <div className="text-lg font-semibold">Revathi</div>
          <div className="text-slate-500 font-thin">Pora</div>
        </div>

        <div>
          <p>04/12/2023</p>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
