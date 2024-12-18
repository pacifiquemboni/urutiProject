import { FiMenu, FiX } from "react-icons/fi";
import { useCallback, useLayoutEffect, useState } from "react";
import logo from "../../assets/logo.png";
import homeIcon from "../../assets/home.svg";
import gameIcon from "../../assets/gaming.svg";
import winnerIcon from "../../assets/winner.svg";
import howtoplayIcomn from "../../assets/howto.svg";
import testimonialsIcon from "../../assets/testmonials.svg";
// import wallet from "../../assets/wallet.svg";
import profile from "../../assets/profile.svg";
import notification from "../../assets/notification.svg";
import logouticon from "../../assets/logout.svg";
import news from "../../assets/news.svg";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { GetUserThunk } from "@/redux/features/actions/users/me";
import { Link } from "react-router-dom";
import { Client_Signup } from "@/helpers/routes";
import ChangeLanguage from "./ChangeLanguage";
import ClientLogin from "./Auth/clientLogin";
import CategoryModal from "./modal/modal";
import { logout } from "@/redux/features/slices/player";

const NEWHEADER = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModel, setLoginModel] = useState(false);

  const { user, access_token } = useAppSelector((s) => s.user);
  useLayoutEffect(() => {
    if (!user && access_token) dispatch(GetUserThunk());
  }, [access_token, dispatch, user]);

  const [showSearchModal, setShowSearchModal] = useState(false);
  const toggleLoginModel = () => {
    setLoginModel(true);
  };
  const closeModal = () => {
    setLoginModel(false);
  };
  const click = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <div
      className="bg-[#19232c] h-20 lg:h-28 relative z-10 "
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 1)", // Updated shadow for better effect
      }}
    >
      {/* Top section */}
      <div className="flex items-center justify-between  lg:mx-20 gap-5 pt-2">
        {/* Mobile Menu Icon */}
        <button className="lg:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu size={24} />
        </button>
        {/* Logo */}
        <div>
          <img src={logo} alt="Casino Logo" width={70} />
        </div>

        {/* Login and Signup */}
        <div className="flex flex-row gap-2 pr-2 items-center top-5">
          {/* Language Selector */}

          <ChangeLanguage />

          {user ? (
            <div className="flex flex-row justify-between bg-white hover:shadow-lg border p-2 rounded-3xl w-40">
              <img src={profile} alt="" className="w-5 h-5" />
              <img src={notification} alt="" className="w-5 h-5" />
              <div onClick={click}>
                <img src={logouticon} alt="" className="w-5 h-5" />
              </div>
            </div>
          ) : (
            <div className="flex flex-row">
              <div
                onClick={toggleLoginModel}
                className="w-fit h-10 border border-[#4a5b68] flex flex-col bg-[#19232c] justify-center"
              >
                <h1 className="font-bold text-white text-center p-2">{t("navbar.login")}</h1>
              </div>
              {loginModel && (
                <CategoryModal children={<ClientLogin />} onClose={closeModal}></CategoryModal>
              )}

              <Link to={Client_Signup}>
                <div className=" hidden lg:flex flex-col justify-center w-20 h-10 border border-[#4a5b68] bg-[#19232c]">
                  <h1 className="font-bold text-white text-center">{t("navbar.signup")}</h1>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Links - Hidden on mobile */}
      <div className="hidden lg:block mt-1">
        <nav className="flex mx-20 text-white font-bold gap-5  items-center h-12">
          <div className="border-b-4 border-[#FF9671] cursor-pointer">
            <Link to={"/"}>
              <p className="p-1 flex flex-row gap-2">
                <img src={homeIcon} alt="" className="w-5 h-5" />
                {t("navbar.home")}
              </p>
            </Link>
          </div>
          <div className="hover:border-b-4 border-[#FF9671] cursor-pointer">
            <p className="p-1 flex flex-row gap-2">
              <img src={gameIcon} alt="" className="w-5 h-5" />
              {t("navbar.ourGames")}
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671] cursor-pointer">
            <p className="p-1 flex flex-row gap-2">
              <img src={winnerIcon} alt="" className="w-5 h-5" />
              {t("navbar.winners")}
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671] cursor-pointer">
            <p className="p-1 flex flex-row gap-2">
              <img src={howtoplayIcomn} alt="" className="w-5 h-5" />
              {t("navbar.howToPlay")}
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671] cursor-pointer">
            <p className="p-1 flex flex-row gap-2">
              <img src={testimonialsIcon} alt="" className="w-5 h-5" />
              {t("navbar.testimonials")}
            </p>
          </div>
          <div className="hover:border-b-4 border-[#FF9671] cursor-pointer">
            <p className="p-1 flex flex-row gap-2">
              <img src={news} alt="" className="w-5 h-5" />
              {t("navbar.news")}
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
