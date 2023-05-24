import React from "react";

export default function WordsSection() {
  return (
    <div className="flex justify-center items-center mb-8">
      <div className="w-[950px] px-8 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 justify-center">
        <div className="flex justify-between px-6 py-3 border-2 rounded-md border-textDark hover:border-gray-400 transition-all duration-100 cursor-pointer">
          <div className="text-left pt-2">
            <h2 className="text-xl tracking-wide text-secondary dark:text-textDark">Word of the day</h2>
            <p className="text-secondary dark:text-textDark pt-4">five o'clock</p>
          </div>
          <img src={"https://dexonline.ro/static/img/wotd/thumb88/2023/05/DEX-230521-five-o'clock.png"} alt="" />
        </div>
        <div className="flex justify-between px-6 py-3 border-2 rounded-md border-textDark hover:border-gray-400 transition-all duration-100 cursor-pointer">
          <div className=" text-left pt-2">
            <h2 className="text-xl tracking-wide text-secondary dark:text-textDark">Word of the month</h2>
            <p className="text-secondary pt-4 dark:text-textDark">adulter</p>
          </div>
          <img src={"https://dexonline.ro/static/img/wotd/thumb88/cuvantul-lunii/2023/Adulter.png"} alt="" />
        </div>
        <div className="flex justify-between px-6 py-3 border-2 rounded-md border-textDark hover:border-gray-400 transition-all duration-100 cursor-pointer">
          <div className=" text-left pt-2">
            <h2 className="text-xl tracking-wide text-secondary dark:text-textDark">Random word</h2>
            <p className="text-secondary dark:text-textDark pt-4">hello</p>
          </div>
          <img src={"https://dexonline.ro/static/img/wotd/thumb88/misc/aleator.jpg"} alt="" />
        </div>
        <div className="flex justify-between px-6 py-3 border-2 rounded-md border-textDark hover:border-gray-400 transition-all duration-100 cursor-pointer">
          <div className=" text-left pt-2">
            <h2 className="text-xl tracking-wide text-secondary dark:text-textDark">Article of the month</h2>
            <p className="text-secondary dark:text-textDark pt-4">More than that...</p>
          </div>
          <img src={"https://dexonline.ro/static/img/wotd/thumb88/misc/papirus.png"} alt="" />
        </div>
        <div className="flex justify-between px-6 py-3 border-2 rounded-md border-textDark hover:border-gray-400 transition-all duration-100 cursor-pointer">
          <div className=" text-left pt-2">
            <h2 className="text-xl tracking-wide text-secondary dark:text-textDark">Games</h2>
            <p className="text-secondary dark:text-textDark pt-4">Hangman and more </p>
          </div>
          <img src={"https://dexonline.ro/img/hangman/thumb.png"} alt="" />
        </div>
        <div className="flex justify-between  px-6 py-3 border-2 rounded-md border-textDark hover:border-gray-400 transition-all duration-100 cursor-pointer">
          <div className=" text-left pt-2">
            <h2 className="text-xl tracking-wide text-secondary dark:text-textDark">Visuals</h2>
            <p className="text-secondary dark:text-textDark pt-4"></p>
          </div>
          <img src={"https://dexonline.ro/img/hangman/thumb.png"} alt="" />
        </div>
      </div>
    </div>
  );
}
