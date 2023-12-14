import { IoSearchSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

import { useState } from "react";

type Props = {};

const Searchbar = (props: Props) => {
  const [isInputFocused, setisInputFocused] = useState<boolean>(false);

  const handleInputFocus = () => {
    setisInputFocused(true);
  };

  const handleInputBlur = () => {
    setisInputFocused(false);
  };

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
        />
      </div>
    </div>
  );
};

export default Searchbar;
