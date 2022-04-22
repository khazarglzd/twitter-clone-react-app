import React from "react";
import { SearchIcon } from "../icons/Icon";
import { Timeline } from "react-twitter-widgets";

const Widgets = () => {
  return (
    <aside className="w-80">
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark focus:outline-none bg-transparent w-full text-sm"
        ></input>
      </div>
      <div className="mt-4 ">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "reactjs",
          }}
          options={{
            height: "800",
          }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
