import { FaArrowLeft } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { MdEdit } from "react-icons/md";
import { Textarea } from "../ui/textarea";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="h-[100vh] flex-1">
      <div className="flex bg-slate-200 h-20 items-center gap-3 p-3">
        <div className="text-2xl cursor-pointer">
          <FaArrowLeft />
        </div>
        <h2 className="text-2xl">Profile</h2>
      </div>

      <div className="h-52 flex items-center justify-center">
        <Avatar className="w-[50%] h-[90%]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col gap-20 p-3 mt-10">
        <div className="flex flex-col gap-4">
          <Label className="text-slate-700 font-semibold text-lg">Your name</Label>

          <div className="flex justify-between gap-2 text-xl">
            {/* <input type="text" value="Nithin Raj" className=" " /> */}
            <p className="font-bold w-full">Nithin Raj</p>

            <div className="cursor-pointer">
              <MdEdit />
            </div>
          </div>

          <p className="text-slate-400 select-none">
            This is not your username or pin. This name will be visible to your Chat Contacts
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Label className="text-slate-700 font-semibold text-lg">About</Label>

          <div className="flex justify-between gap-2 text-xl">
            {/* <input type="text" value="I am Hooman!j" className=" " /> */}
            <p className="font-bold w-full">I am Hooman!j</p>

            <div className="cursor-pointer">
              <MdEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
