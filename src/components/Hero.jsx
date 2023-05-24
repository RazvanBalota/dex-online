import Footer from "./Footer";
import WordsSection from "./WordsSection";
import SearchFunction from "./SearchFunction";
import Nav from "./Nav";

function Hero() {
  return (
    <section className="bg-[#f9f9f9] dark:bg-[#121212]">
      <Nav />

      <div className="flex justify-center px-10">
        <div className="pt-10 ">
          <div className="bg-logo dark:bg-logoDark  bg-no-repeat w-80 h-20 "></div>
          <p className="text-right text-gray-800 dark:text-textDark tracking-wide text-sm px-2 lg:px-24">
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
    </section>
  );
}

export default Hero;
