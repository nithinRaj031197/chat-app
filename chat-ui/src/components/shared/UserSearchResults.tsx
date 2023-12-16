import { SearchUserResponse } from "@/types/global";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import axiosApi from "@/axios";
import { useState } from "react";

type UserSearchResultsProps = {
  userSearchList: SearchUserResponse;
  searchInput: string;
  setUserSearchList: (val: SearchUserResponse | null) => void;
};

const UserSearchResults = ({
  userSearchList,
  searchInput,
  setUserSearchList,
}: UserSearchResultsProps) => {
  const [currentPage, setCurrentPage] = useState(2);

  const loadMoreSearchUsers = async () => {
    try {
      // setIsSearchingUsers("loading");
      const response = await axiosApi.get(
        `/auth/search/${searchInput}/${currentPage}/5`
      );
      const remainingUserList = response && response?.data;

      const combinePreviousUserResult = [
        ...userSearchList.users,
        ...remainingUserList.users,
      ];

      const outputResult: SearchUserResponse = {
        ...userSearchList,
        users: combinePreviousUserResult,
        currentPage: remainingUserList.currentPage,
      };

      setUserSearchList(outputResult);

      setCurrentPage((prev) => prev + 1);

      // setIsSearchingUsers("success");
    } catch (error) {
      console.error(error);
      // setIsSearchingUsers("error");
    }
  };

  return (
    <div className="h-full overflow-auto">
      {userSearchList.users.length > 0 ? (
        userSearchList.users?.map((user) => {
          return (
            <div
              key={user._id}
              className="cursor-pointer h-20 bg-slate-200  border-b-2 border-white flex gap-3 items-center p-2"
            >
              <Avatar className="w-14 h-14">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex justify-between w-full">
                <div>
                  <div className="text-lg font-semibold">{user.username}</div>
                  <div className="text-slate-500 font-thin">{user.email}</div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="h-16 mx-2">
          <p className="bg-slate-200 font-bold h-full  flex items-center justify-center rounded">
            No Result
          </p>
        </div>
      )}

      {userSearchList.users.length > 0 &&
        userSearchList.users.length < userSearchList.totalUsers && (
          <div className="h-16 mx-2">
            <p
              onClick={loadMoreSearchUsers}
              className="cursor-pointer text-blue-600 font-bold h-full  flex items-center justify-center rounded"
            >
              Load More
            </p>
          </div>
        )}
    </div>
  );
};

export default UserSearchResults;
