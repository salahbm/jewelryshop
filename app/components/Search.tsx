import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchView = () => {
  return (
    <div className="flex items-center m-2 justify-center w-full ">
      <div className=" before:relative h-8 rounded-lg bg-neutral-200 text-black hover:text-slate-900 hover:bg-yellow-100 pr-2  pl-3 flex items-center transition duration-700 ease-in-out md:w-1/2 w-3/4 hover:w-[90%]">
        <input
          className=" bg-inherit w-full border-inherit outline-none"
          type="search"
        />
        <SearchIcon className="text-lg " />
      </div>
    </div>
  );
};

export default SearchView;
