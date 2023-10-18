import React from "react";

import SearchIcon from "@mui/icons-material/Search";

const SearchView = () => {
  return (
    <div className="flex items-center m-2 justify-center">
      <div className="relative h-10 rounded-lg bg-Red text-white hover:text-slate-900 hover:bg-yellow-100 pr-2  pl-3 flex items-center transition duration-700 ease-in-out w-1/2 hover:w-full">
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
