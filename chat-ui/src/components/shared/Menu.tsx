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
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

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

  const { removeToken } = useContext(AuthContext);

  const navigate = useNavigate();

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
            <DropdownMenuItem
              key={index}
              className="h-10"
              onClick={() => {
                if (item === "Logout") {
                  removeToken();
                  navigate("/sign-in");
                }
              }}
            >
              {item}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
