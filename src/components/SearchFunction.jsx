import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchFunction() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const trimmedWord = word.trim().toLocaleLowerCase();
    if (!trimmedWord || trimmedWord.split().length > 1) return;
    navigate(`/word/${word}`, { replace: true });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="container mx-auto pt-6 lg:pt-6">
        <div className="flex justify-center h-full pt-10 px-6">
          <input
            onChange={(e) => setWord(e.target.value)}
            type="text"
            placeholder="your word"
            className="w-[780px] border-2 px-4 py-1 text-sm rounded-l-md outline-none dark:bg-transparent dark:border-gray-700 focus:border-hovercolor dark:focus:border-hovercolor transition-all ease-in-out duration-300 text-gray-800 dark:text-textDark"
          />

          <button className="border-2 bg-hovercolor dark:border-transparent text-white px-3 py-1 flex items-center justify-center gap-x-2 rounded-r-md">
            <AiOutlineSearch size={15} />
            search
          </button>
        </div>
      </div>
    </form>
  );
}
