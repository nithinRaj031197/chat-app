import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiMenuKebab } from "react-icons/ci";

type IMenuDetails = {
  [key: string]: string[];
};

const menuDetails: IMenuDetails = {
  myProfile: ["New Group", "Starred Messages", "Settings", "Logout"],
  userProfile: [
    "ContactInfo",
    "Mute Notifications",
    "Clear Chat",
    "Delete Chat",
    "Block",
  ],
};

type MenuProps = {
  menuType: string;
};

export function Menu({ menuType }: MenuProps) {
  const dropDownMenu = menuDetails[menuType];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-transparent hover:bg-transparent text-black  rounded-full active:bg-slate-200">
          <CiMenuKebab />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {dropDownMenu?.map((item, index) => {
          return (
            <DropdownMenuItem key={index} className="h-10">
              {item}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
