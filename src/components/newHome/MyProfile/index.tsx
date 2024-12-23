import { ToastContainer } from "react-toastify";
import logo from "../../../assets/logo.png";
// import homeIcon from "../../../assets/home.svg";
// import logouticon from "../../../assets/logout.svg";

// import notification from "../../../assets/notification.svg";
import bgphoto from "../../../assets/newassets/walletBg.png"
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useLayoutEffect, useState } from "react";
import { GetProductByIdThunk } from "@/redux/features/actions/products";
import CopyTextComponent from "./copyText";
// import { Link } from "react-router-dom";
import { GetUserThunk } from "@/redux/features/actions/users/me";
import Skeleton from "./skeleton";

// import { HOME_ROUTE } from "@/helpers/routes";

// import { logout } from "@/redux/features/slices/player";
import ChangeLanguage from "../ChangeLanguage";
import MyProfile from "./myProfile";
// import { useTranslation } from "react-i18next";

const MyWallet = () => {
  const dispatch = useAppDispatch();
  // const { t } = useTranslation();

  // const [isModalVisible, setIsModalVisible] = useState(false);
  const { loading } = useAppSelector((s) => s.products) || {};
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
  console.log("user found", user);
  const [isProfile, setProfile] = useState(true);
  const [isDeposit, setDeposit] = useState(false);
  const [isWithdraw, setWithdraw] = useState(false);

  const handleProfile = () => {
    setProfile(true);
    setDeposit(false);
    setWithdraw(false);
  };
  const handleDeposit = () => {
    setProfile(false);
    setDeposit(true);
    setWithdraw(false);
  };
  const handleWithdraw = () => {
    setProfile(false);
    setDeposit(false);
    setWithdraw(true);
  };

  return (
    <div className="cursor-default ">

      {loading ? (
        <Skeleton />
      ) : (
        <div className="bg-[#F1F4FC] rounded-3xl">
          <div className="h-48 py-5 bg-[#19232c] rounded-t-2xl"

            style={{
              backgroundImage: `url(${bgphoto})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '100%',
            }}
          >
            <div className="flex  lg:flex-row justify-between  items-start mx-1  md:mx-16">
              <div className="flex flex-row gap-5 w-1/3">
                <div className="w-fit ">
                  <img src={logo} className="w-24 h-24 border-4 rounded-full" />
                </div>
                <div className="w-2/3 flex flex-col gap-2">

                  <p className="text-white font-bold">
                    {user?.email}
                  </p>
                  <div className="flex items-center">
                    <CopyTextComponent />|
                    {user?.emailVerified  ? (
                      <div className="text-green-500 font-semibold">Verified</div>
                    ) : (
                      <div className=" font-semibold">UnVerified</div>
                    )}

                  </div>

                  <hr className="border-3 bg-grey" />
                  status: <br />
                  <p className="text-white">Babi Games</p>
                </div>

              </div>
              <div className="flex gap-1">
                <button className="border p-2 rounded-3xl bg-white" >
                  Confirm e-mail
                </button>
                <div className="hidden md:block">
                  <ChangeLanguage />
                </div>
                
              </div>
            </div>

          </div>
          <hr />
          <div className=" mx-16">
            <div className="flex">
              <div className={` p-3 ${isProfile ? "border-b-4 border-[#FF9671] text-[#FF9671]" : ""}`} onClick={handleProfile}>
                Profile
              </div>
              <div className={` p-3 ${isDeposit ? "border-b-4 border-[#FF9671] text-[#FF9671]" : ""}`} onClick={handleDeposit}>
                Deposit
              </div>
              <div className={` p-3 ${isWithdraw ? "border-b-4 border-[#FF9671] text-[#FF9671]" : ""}`} onClick={handleWithdraw}>
                Withdraw
              </div>
            </div>
            <hr />

            {
              isProfile && <MyProfile />
            }
            {
              isDeposit && <div className="w-full h-96">This is deposit section</div>
            }
            {
              isWithdraw && <div className="w-full h-96">This is Wthdraw section</div>
            }

          </div>

        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default MyWallet;
