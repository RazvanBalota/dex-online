import React, { useEffect, useState } from "react";
import SearchFunction from "../components/SearchFunction";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AiFillInfoCircle } from "react-icons/ai";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Content() {
  const { word } = useParams();
  const [definition, setDefinition] = useState([]);
  const [meaning, setMeaning] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const resp = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        setDefinition(resp.data);
        setError(null); // Clear the error if the fetch is successful
      } catch (error) {
        setError("No definition found for your word. Please try another word ...");
        setDefinition([]);
        console.error("Error occurred while fetching word:", error);
      }
    };
    fetchWord();
  }, [word, error]);
  return (
    <div className=" bg-[#f1f1f1] dark:bg-[#121212]">
      <Nav />
      <div className="flex justify-center px-10">
        <div className="pt-10 ">
          <Link to="/dex-online">
            <div className="bg-logo dark:bg-logoDark  bg-no-repeat w-80 h-20 "></div>
          </Link>
          <p className="text-right text-gray-800 dark:text-textDark tracking-wide text-sm px-2 lg:px-24">
            Dictionary of English language
          </p>
        </div>
      </div>
      <SearchFunction />
      <div className="container mx-auto px-7 max-w-full  lg:w-[930px] ">
        {/* display definitions */}
        <div className="pt-10 flex w-[150px] ">
          <div className=" py-1 flex gap-x-2 text-sm text-black dark:text-textDark">
            <div className="px-4 py-2 border-2 border-b-0 dark:border-textDark cursor-pointer">
              <p>synthesis</p>
            </div>
            <div
              onClick={() => setMeaning(true)}
              className="px-4 py-2 border-2 border-b-0 dark:border-textDark cursor-pointer text-hovercolor">
              <p>definition</p>
            </div>
            <div className="px-4 py-2 border-2 border-b-0 dark:border-textDark cursor-pointer">
              <p>declinations</p>
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold lowercase pt-5 text-3xl px-4 py-2 pb-6 border-b-2 dark:border-white border-black/50 text-black dark:text-white">
            {word}
          </div>
          {meaning ? (
            <>
              {definition.map((def) => (
                <>
                  {def.meanings.map((meaning, origin) => (
                    <div
                      key={origin}
                      className="bg-[#f1f1f1] dark:bg-[#121212] text-black dark:text-white list-none capitalize font-semibold border-t-2 dark:border-textDark text-xl pt-4 px-6">
                      {meaning.partOfSpeech}
                      {meaning.definitions.map((definition, id) => (
                        <li
                          key={id}
                          className=" font-normal text-sm px-2 py-2 list-disc tracking-wide leading-6 text-black dark:text-white">
                          {definition.definition}
                        </li>
                      ))}
                    </div>
                  ))}
                </>
              ))}
              <div>{error && <p className="text-[#121212] dark:text-white pt-12 px-6 tracking-wide">{error}</p>}</div>
              <div className=" flex gap-x-2 items-center pt-16 text-sm tracking-wide pb-2">
                <AiFillInfoCircle className="text-dark dark:text-white" />
                <p className="text-secondary dark:text-textDark">
                  The full list of definitions are on definitions file.
                </p>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}
