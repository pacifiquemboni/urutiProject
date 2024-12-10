import { ToastContainer } from "react-toastify";
import logo from "../../../assets/logo.png";
import homeIcon from "../../../assets/home.svg";
import logouticon from "../../../assets/logout.svg";
import wallet from "../../../assets/wallet.svg";
import token from "../../../assets/tokens.svg";
import profile from "../../../assets/profile.svg";
import add from "../../../assets/add.svg";
import price from "../../../assets/price.svg";
import notification from "../../../assets/notification.svg";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { GetProductByIdThunk } from "@/redux/features/actions/products";
import CopyTextComponent from "./copyText";
import { Link } from "react-router-dom";
import { GetUserThunk } from "@/redux/features/actions/users/me";
import Skeleton from "./skeleton";
import Play from "./play";
import Tooltip from "../ToolKit";
import { HOME_ROUTE } from "@/helpers/routes";
import MyTokens from "./myTokens";
import TokenModel from "../modal/tokenModel";
import { logout } from "@/redux/features/slices/player";
import ChangeLanguage from "../ChangeLanguage";
import { useTranslation } from "react-i18next";

const MyWallet = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { info, loading } = useAppSelector((s) => s.products) || {};
  const { user, access_token } = useAppSelector((s) => s.user);
  useLayoutEffect(() => {
    if (!user && access_token) dispatch(GetUserThunk());
  }, [access_token, dispatch, user]);
  const productId = localStorage.getItem("productId");
  // console.log("prodcuctId:", productId);
  useEffect(() => {
    if (productId) {
      dispatch(GetProductByIdThunk(productId));
    }
  }, [dispatch, productId]);
  // console.log("by id info", info);
  // console.log("user found", user);
  const handleHomeRedirect = () => {
    window.location.assign(HOME_ROUTE);
  };

  const handleOpenModel = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const click = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <div className="cursor-default ">
      <div className="bg-[#19232c]  text-white shadow-xl">
        <div className="flex flex-row items-center justify-between mx-2 lg:mx-20">
          <img src={logo} className="w-16 h-16" />
          <div className="flex flex-row items-center gap-2">
            <Link to={"/"}>
              <p className="flex flex-row gap-2 hover:border-b-4 border-[#FF9671]">
                <img src={homeIcon} alt="" className="w-5 h-5" />
                {t("myWallet.home")}
              </p>
            </Link>
            |
            <img src={notification} alt="" className="w-5 h-5" />
            |
            <ChangeLanguage />|
            <div
              className="flex flex-row border  border-[#FF9671] p-2 rounded-xl items-center cursor-pointer hover:bg-[#FF9671]"
              onClick={click}
            >
              <img src={logouticon} alt="" className=" w-5 h-5" />
              <p> {t("myWallet.logout")}</p>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Skeleton />
      ) : (
        <div className=" mx-2 lg:mx-20 ">
          <div className="flex  lg:flex-row justify-between items-start lg:items-center py-5">
            <div>
              <p>
                {" "}
                {t("myWallet.hi")}, {user?.lastName ? user.lastName : user?.firstName}
              </p>
              <p className="font-bold text-lg"> {t("myWallet.my_babi_wallet")}</p>
            </div>
            <div className="">
              <CopyTextComponent />
            </div>
          </div>
          <hr />
          <div className="my-3  flex flex-col lg:flex-row gap-3 cursor-default">
            <div className="flex flex-row  lg:w-fit p-1 rounded bg-[#FDF1E2] hover:shadow">
              <img src={wallet} alt="" className="w-12 h-12" />
              <div>
                <p>{t("myWallet.balance")}: 1000 Rf</p>
                <div className="flex flex-row gap-1">
                  <button className="bg-[#FF9671] px-2 rounded text-white flex items-center gap-1">
                  {t("myWallet.add_funds")}
                  </button>
                  <button className="bg-[#FF9671] px-2 rounded text-white flex items-center gap-1">
                  {t("myWallet.withdraw")}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row  lg:w-fit p-1 rounded bg-[#E8F7E8] hover:shadow">
              <img src={token} alt="" className="w-12 h-12" />
              <div>
                <p>{t("myWallet.my_tokens")}</p>
                <div className="flex flex-row gap-1">
                  <p>{t("myWallet.to_use_for_rewards")}</p>
                  <button
                    onClick={handleOpenModel}
                    className="bg-[#FF9671] px-2 rounded text-white flex items-center gap-1"
                  >
                    {t("myWallet.view")}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row  lg:w-fit p-1 rounded bg-[#DFF3F9] hover:shadow">
              <img src={profile} alt="" className="w-12 h-12" />
              <div>
                <p>{t("myWallet.personal_information")}</p>
                <div className="flex flex-row gap-1">
                  <p>{t("myWallet.update_personal_information")}</p>
                </div>
              </div>
            </div>
          </div>
          {isModalVisible && (
            <TokenModel onClose={closeModal}>
              <MyTokens />
            </TokenModel>
          )}
          {/* game details */}
          <div className="">
            <p className="font-bold text-2xl">{t("myWallet.game_details")}</p>
            <div className="flex flex-col lg:flex-row">
              {productId ? (
                <>
                  <div className="w-full lg:w-1/2 ">
                    <div className="flex justify-between font-semibold">
                      <p>{t("myWallet.selected_product")}</p>
                      <p
                        onClick={handleHomeRedirect}
                        className="text-green-500 mr-3 hover:text-inherit cursor-pointer"
                      >
                        {t("myWallet.select_different_product")}
                      </p>
                    </div>

                    <div className="w-full  p-1  rounded-lg">
                      <div className=" w-full">
                        <div className="flex flex-row justify-between"></div>
                        <div className="flex flex-row items-center gap-4 text-black  w-full">
                          <img
                            src={info?.picture ? info.picture : logo}
                            alt="Product Logo"
                            className="w-40 h-40"
                          />
                          <div className="w-full ">
                            <p>{info?.name}</p>
                            <p className="text-sm text-gray-700">{info?.description}</p>
                            <p className="bg-[#222e38] flex flex-row px-2 gap-2 text-white p-2 rounded-lg items-center">
                              <img src={price} alt="" className="w-5 h-5" />
                              {info?.playAmount} <span>{t("myWallet.price")}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* play component */}
                  <Play />
                </>
              ) : (
                <div className=" text-center border flex gap-2 justify-center items-center  w-full h-24">
                  <Tooltip message={t("myWallet.select_product_you_need_to_play")}>
                    <div
                      onClick={handleHomeRedirect}
                      className="text-grey flex gap-2 justify-center items-center cursor-pointer"
                    >
                      {t("myWallet.select_product")}
                      <img src={add} alt="" className="w-5 h-5" />{" "}
                    </div>
                  </Tooltip>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default MyWallet;
