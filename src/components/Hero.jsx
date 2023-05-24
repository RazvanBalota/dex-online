import Footer from "./Footer";
import WordsSection from "./WordsSection";
import SearchFunction from "./SearchFunction";
import Nav from "./Nav";

function Hero() {
  return (
    <section className="bg-[#f9f9f9] dark:bg-[#121212]">
      <Nav />

      <div className="flex justify-center">
        <div className="w-96 pt-10 pl-4">
          <div className="bg-logo dark:bg-logoDark  bg-no-repeat w-96 h-20 "></div>
          <p className="text-right text-gray-800 dark:text-textDark tracking-wide text-sm pr-16">
            Dictionary of English language
          </p>
        </div>
      </div>
      {/* fetch words */}
      <SearchFunction />
      {/* Words section */}
      <WordsSection />
      <div className="flex items-center justify-center px-5 pt-5">
        <p className="  flex justify-center text-center text-sm text-primary dark:text-textDark italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br className="hidden md:block" /> Quam provident
          voluptas nihil voluptatum vitae voluptate ducimus, aperiam sint rerum. Earum.
        </p>
      </div>
      <Footer />

      {/* {results?.map((meaning) => {
        return <div>{meaning.partOfSpeech}</div>;
      })}
      {results?.map((mean) =>
        mean.definitions?.map((def) => {
          return <li>{def.definition}</li>;
        })
      )} */}
    </section>
  );
}

export default Hero;
