import { IoSearchSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

import { useEffect, useState } from "react";
import axiosApi from "@/axios";
import { LoadingStateType, SearchUserResponse } from "@/types/global";

type SearchbarProps = {
  isInputFocused: boolean;
  setisInputFocused: (val: boolean) => void;
  setUserSearchList: (val: null) => void;
  searchingUserStatus: (val: LoadingStateType) => void;
  userSearchList: SearchUserResponse | null;
  setsearchInput: (val: string) => void;
  searchInput: string;
};

const Searchbar = ({
  isInputFocused,
  setisInputFocused,
  setUserSearchList,
  searchingUserStatus,
  userSearchList,
  setsearchInput,
  searchInput,
}: SearchbarProps) => {
  const handleInputFocus = () => {
    setisInputFocused(true);
  };

  const handleInputBlur = () => {
    setisInputFocused(false);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchInput(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        searchingUserStatus("loading");
        const response =
          isInputFocused &&
          (await axiosApi.get(`/auth/search/${searchInput}/1/5`));
        setUserSearchList(response && response?.data);

        searchingUserStatus("success");
      } catch (error) {
        console.error(error);
        searchingUserStatus("error");
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput]);

  return (
    <div className="flex items-center bg-slate-200 m-2 p-3 rounded-lg gap-5">
      <div className="text-2xl">
        {isInputFocused ||
        (userSearchList && userSearchList.users.length > 0) ? (
          <>
            <FaArrowLeft />
          </>
        ) : (
          <IoSearchSharp />
        )}
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <input
          type="text"
          id="search"
          placeholder="Search or start new chat"
          className="text-lg outline-none border-none bg-transparent focus:outline-none focus:border-none focus-visible:border-none focus-visible:outline-none"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleSearchInput}
        />
      </div>
    </div>
  );
};

export default Searchbar;
