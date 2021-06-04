import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Searchbox = () => {
  return (
    <div class="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
      <div class="flex justify-between">
        <div class="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
          <div class="flex flex-wrap items-stretch w-full h-full mb-6 relative">
            <div class="flex">
              <span class="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-nowrap text-grey-dark text-sm">
                <FontAwesomeIcon
                  icon={["fas", "search"]}
                  color="grey"
                ></FontAwesomeIcon>
              </span>
            </div>
            <input
              type="text"
              class="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
