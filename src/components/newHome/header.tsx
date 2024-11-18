import Globe from "../../assets/newassets/globe.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
// import OnlineCasinos from "./models/onlineCasino";
import logo from "../../assets/logo.png";
import homeIcon from "../../assets/home.svg";
import gameIcon from "../../assets/gaming.svg";
import winnerIcon from "../../assets/winner.svg";
import howtoplayIcomn from "../../assets/howto.svg";
import testimonialsIcon from "../../assets/testmonials.svg";
import news from "../../assets/news.svg";

const NEWHEADER = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [onlineCasinoOpen, setOnlineCasinoOpen] = useState(false);

  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <div
      className="bg-[#19232c] h-20 lg:h-28 relative z-10 "
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)", // Updated shadow for better effect
      }}
    >
      {/* Top section */}
      <div className="flex items-center justify-between  lg:mx-24 gap-5 pt-2">
        {/* Mobile Menu Icon */}
        <button className="lg:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu size={24} />
        </button>
        {/* Logo */}
        <div>
          <img src={logo} alt="Casino Logo" width={70} />
        </div>

        {/* Search Input (Inline on larger screens) */}
        {/* <div className="hidden lg:flex flex-1 items-center border border-gray-300 p-2 bg-[#19232c] shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-2 py-1 text-white bg-transparent focus:outline-none"
          />
          <FiSearch className="text-gray-500" />
        </div> */}

        {/* Mobile Search Icon */}
        {/* <button className="lg:hidden text-white ml-auto" onClick={() => setShowSearchModal(true)}>
          <FiSearch size={24} />
        </button> */}

        {/* Login and Signup */}
        <div className="flex flex-row gap-2 pr-2">
          {/* Language Selector */}
          <div className="w-20 h-10 border border-[#4a5b68] bg-[#19232c]  flex flex-row gap-1 justify-center items-center">
            <div className="text-white font-bold">EN</div>
            <div className="text-white w-1 bg-white">|</div>
            <img src={Globe} alt="Globe" width={20} />
          </div>
          <div className="flex flex-rwo">
            <div className="w-20 h-10 border border-[#4a5b68] flex flex-col bg-[#19232c] justify-center">
              <h1 className="font-bold text-white text-center">Login</h1>
            </div>
            <div className=" hidden lg:flex flex-col justify-center w-20 h-10 border border-[#4a5b68] bg-[#19232c]">
              <h1 className="font-bold text-white text-center">Sign up</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links - Hidden on mobile */}
      <div className="hidden lg:block mt-1">
        <nav className="flex mx-24 text-white font-bold  gap-5 justify-center items-center h-12">
          <div className="border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={homeIcon} alt="" className="w-5 h-5" />
              Home
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={gameIcon} alt="" className="w-5 h-5" />
              Our Games
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={winnerIcon} alt="" className="w-5 h-5" />
              Winners
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={howtoplayIcomn} alt="" className="w-5 h-5" />
              How To Play
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={testimonialsIcon} alt="" className="w-5 h-5" />
              Testimonials
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={news} alt="" className="w-5 h-5" />
              News
            </p>
          </div>
        </nav>
      </div>

      {/* Mobile Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 bg-[#19232c] bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md p-4 bg-[#19232c] rounded-md shadow-lg">
            <div className="flex items-center border border-gray-300 p-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-2 py-1 text-white bg-transparent focus:outline-none"
              />
              <button onClick={() => setShowSearchModal(false)}>
                <FiX className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Side Menu */}
      {menuOpen && (
        <div className="fixed  inset-0 bg-[#19232c] bg-opacity-95 z-100 p-4">
          <button className="text-white text-xl mb-4" onClick={() => setMenuOpen(false)}>
            Close
          </button>
          <nav className="flex flex-col text-white font-bold space-y-4">
          <div className="border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={homeIcon} alt="" className="w-5 h-5" />
              Home
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={gameIcon} alt="" className="w-5 h-5" />
              Our Games
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={winnerIcon} alt="" className="w-5 h-5" />
              Winners
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={howtoplayIcomn} alt="" className="w-5 h-5" />
              How To Play
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={testimonialsIcon} alt="" className="w-5 h-5" />
              Testimonials
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671]">
            <p className="p-1 flex flex-row gap-2">
              <img src={news} alt="" className="w-5 h-5" />
              News
            </p>
          </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NEWHEADER;
