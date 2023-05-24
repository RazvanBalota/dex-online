import React from "react";

export default function Footer() {
  return (
    <div className="container mx-auto mt-10 flex flex-col justify-center items-center border-t-2 w-[300px] lg:w-[780px] ">
      <p className="text-sm text-primary dark:text-textDark pt-2">Copyright © 2004-2023 dexonline</p>
      <div className="flex gap-x-2 mt-4 mb-4 text-sm text-secondary dark:text-textDark">
        <p className="cursor-pointer hover:text-gray-500 transition-all duration-100">licence</p>
        <p className="cursor-pointer hover:text-gray-500 transition-all duration-100">confidentiality</p>
        <p className="cursor-pointer hover:text-gray-500 transition-all duration-100">hosted by Hosterion</p>
      </div>
    </div>
  );
}
