import { IoSearchSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

import { BaseSyntheticEvent, useEffect, useState } from "react";
import axios from "axios";

type Props = {};

const Searchbar = (props: Props) => {
  const [searchInput, setsearchInput] = useState("");
  const [debounceValue, setDebounceValue] = useState("");
  const [isInputFocused, setisInputFocused] = useState<boolean>(false);

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
      // setDebounceValue(searchInput);
      try {
        const response = await axios.get(
          `http://192.168.1.10:5001/auth/search/${searchInput}`
        );

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput]);

  console.log(searchInput, debounceValue);

  return (
    <div className="flex items-center bg-slate-200 m-2 p-3 rounded-lg gap-5">
      <div className="text-2xl">
        {isInputFocused ? (
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
