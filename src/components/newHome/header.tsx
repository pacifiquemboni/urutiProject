import CasinoLogo from "../../assets/newassets/casinoguru_logo.svg";
import Globe from "../../assets/newassets/globe.png";
import court from "../../assets/newassets/court.png";
import gift from "../../assets/newassets/gift.png";
import group from "../../assets/newassets/group.png";
import news from "../../assets/newassets/news.png";
import star from "../../assets/newassets/star.png";
import winner from "../../assets/newassets/winner.png";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const NEWHEADER = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <div className="bg-[#19232c] h-14 lg:h-24">
      {/* Top section */}
      <div className="flex items-center  lg:mx-24 gap-5 pt-2">
        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu size={24} />
        </button>
        {/* Logo */}
        <div>
          <img src={CasinoLogo} alt="Casino Logo" width={90} />
        </div>
        
        {/* Search Input (Inline on larger screens) */}
        <div className="hidden lg:flex flex-1 items-center border border-gray-300 p-2 bg-[#19232c] shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-2 py-1 text-white bg-transparent focus:outline-none"
          />
          <FiSearch className="text-gray-500" />
        </div>

        {/* Mobile Search Icon */}
        <button className="lg:hidden text-white ml-auto" onClick={() => setShowSearchModal(true)}>
          <FiSearch size={24} />
        </button>

        {/* Language Selector */}
        <div className="w-20 h-10 border bg-[#19232c] flex flex-row gap-1 justify-center items-center">
          <div className="text-white font-bold">EN</div>
          <div className="text-white w-1 bg-white">|</div>
          <img src={Globe} alt="Globe" width={20} />
        </div>
        
        {/* Login and Signup */}
        <div className="flex flex-row">
          <div className="w-20 h-10 border flex flex-col bg-[#19232c] justify-center">
            <h1 className="font-bold text-white text-center">Login</h1>
          </div>
          <div className=" hidden lg:flex flex-col justify-center w-20 h-10 border bg-[#19232c]">
            <h1 className="font-bold text-white text-center">Sign up</h1>
          </div>
        </div>
      </div>
      
      {/* Navigation Links - Hidden on mobile */}
      <div className="hidden lg:block mt-1">
        <nav className="flex mx-24 text-white font-bold justify-between items-center h-8">
          <div className="flex flex-row" ><img src={news} alt="" />Online Casinos</div>
          <div className="flex flex-row border-b-4 border-green-500"><img src={news} alt="" />Games</div>
          <div className="flex flex-row"><img src={gift} alt="" />Bonuses</div>
          <div className="flex flex-row"><img src={news} alt="" />Guide</div>
          <div className="flex flex-row"><img src={court} alt="" />Complaint</div>
          <div className="flex flex-row"><img src={group} alt="" />Forum</div>
          <div className="flex flex-row"><img src={star} alt="" />Review</div>
          <div className="flex flex-row"><img src={winner} alt="" />Tournament</div>
          <div className="flex flex-row"><img src={news} alt="" />News</div>
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
        <div className="fixed inset-0 bg-[#19232c] bg-opacity-95 z-50 p-4">
          <button
            className="text-white text-xl mb-4"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
          <nav className="flex flex-col text-white font-bold space-y-4">
            <div className="flex items-center gap-2"><img src={news} alt="" />Online Casinos</div>
            <div className="flex items-center gap-2"><img src={news} alt="" />Games</div>
            <div className="flex items-center gap-2"><img src={gift} alt="" />Bonuses</div>
            <div className="flex items-center gap-2"><img src={news} alt="" />Guide</div>
            <div className="flex items-center gap-2"><img src={court} alt="" />Complaint</div>
            <div className="flex items-center gap-2"><img src={group} alt="" />Forum</div>
            <div className="flex items-center gap-2"><img src={star} alt="" />Review</div>
            <div className="flex items-center gap-2"><img src={winner} alt="" />Tournament</div>
            <div className="flex items-center gap-2"><img src={news} alt="" />News</div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NEWHEADER;
