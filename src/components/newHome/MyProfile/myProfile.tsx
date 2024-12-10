import { GetTokensThunk } from "@/redux/features/actions/player";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useCallback, useEffect, useState } from "react";
import arrowright from "../../../assets/arrowright.svg"
import WalletIcon from "@/assets/wallet.svg";
import tokenicon from "@assets/tokens.svg"
import logouticon from "@assets/logout.svg"
import profile from "@assets/profile.svg"
import MyTokens from "./myTokens";
import { logout } from "@/redux/features/slices/player";
import Balance from "./balance";
import ProfileSettings from "./profileSettings";

const MyProfile = () => {
    const dispatch = useAppDispatch();
    const { tokens } = useAppSelector((s) => s.player) || {};
    useEffect(() => {
        dispatch(GetTokensThunk)
    }, [dispatch])

    console.log("tokens:", tokens);

    const [isBalance, setBalance] = useState(true);
    const [isMytokens, setMytokens] = useState(false);
    const [isSettings, setSettings] = useState(false);

    const handleBalance = () => {
        setBalance(true);
        setMytokens(false);
        setSettings(false);
    };
    const handleWonTokens = () => {
        setBalance(false);
        setMytokens(true);
        setSettings(false);
    };
    const handleExpiredTokens = () => {
        setBalance(false);
        setMytokens(false);
        setSettings(true);
    };

    const click = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
    return (
        <div className=" flex flex-row justify-between  py-5">
            <div className="flex flex-col w-80  drop-shadow-xl bg-white rounded-xl text-[#19232c] h-96">
                {/* <p className="border min-w-10 w-fit text-center p-2">All</p> */}
                <div
                    onClick={handleBalance}
                    className={` font-bold w-full cursor-pointer rounded-t-xl hover:bg-[#19232c] hover:text-white  ${isBalance ? "bg-[#19232c] text-white " : ""
                        }`}
                >
                    <div className="px-4">
                        <div className=" h-14 flex items-center justify-between">
                            <span className="flex items-center gap-3">
                                <img src={WalletIcon} alt="" className="w-6 h-6" />
                                Balances
                            </span>

                            <img src={arrowright} alt="" className="w-3 h-3" />
                        </div>

                        <hr />
                    </div>
                </div>
                <div
                    onClick={handleWonTokens}
                    className={` font-bold w-full  cursor-pointer hover:bg-[#19232c] hover:text-white ${isMytokens ? "bg-[#19232c] text-white" : ""
                        }`}
                >
                    <div className="px-4">
                        <div className=" h-14 flex items-center justify-between">
                            <span className="flex items-center gap-3">
                                <img src={tokenicon} alt="" className="w-6 h-6" />
                                My Tokens
                            </span>
                            <img src={arrowright} alt="" className="w-3 h-3" />
                        </div>

                        <hr />
                    </div>

                </div>
                <div
                    onClick={handleExpiredTokens}
                    className={` font-bold w-full h-14 cursor-pointer hover:bg-[#19232c] hover:text-white ${isSettings ? "bg-[#19232c] text-white" : ""
                        }`}
                >
                    <div className="px-4">
                        <div className=" h-14 flex items-center justify-between">
                            <span className="flex items-center gap-3">
                                <img src={profile} alt="" className="w-6 h-6" />
                                Settings
                            </span>
                            <img src={arrowright} alt="" className="w-3 h-3" />
                        </div>

                        <hr />
                    </div>
                </div>
                <div
                    onClick={click}
                    className={`min-w-10 font-bold w-full  h-14 cursor-pointer hover:bg-[#19232c] hover:text-white`}
                >
                    <div className="px-4">
                        <div className=" h-14 flex items-center justify-between">
                            <span className="flex items-center gap-3">
                                <img src={logouticon} alt="" className="w-6 h-6" />
                                Logout
                            </span>
                            <img src={arrowright} alt="" className="w-3 h-3" />
                        </div>

                        <hr />
                    </div>
                </div>
            </div>

            <div
                className="lg:h-auto w-[70%] bg-white rounded-xl relative drop-shadow-xl"

            >
                {isBalance && (
                    <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
                        <Balance />
                        {
                            // [...Array(15)].map((_, idx) => (
                            //     <div
                            //         key={idx}
                            //         className="flex flex-row items-center gap-3 p-4 bg-gray-300 rounded w-full lg:w-1/4"
                            //     >
                            //         {/* <div className="h-12 w-12 bg-gray-400 rounded"></div>
                            //         <div className="flex flex-col space-y-2 w-full">
                            //             <div className="h-4 w-24 bg-gray-400 rounded"></div>
                            //             <div className="h-6 w-20 bg-gray-400 rounded"></div>
                            //         </div> */}
                            //     </div>
                            // ))
                        }
                    </div>
                )}
                {isMytokens && (
                    <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
                        <MyTokens />
                        {
                            // [...Array(6)].map((_, idx) => (
                            //     <div
                            //         key={idx}
                            //         className="flex flex-row items-center gap-3 p-4 bg-gray-300 rounded w-full lg:w-1/3"
                            //     >
                            //         <div className="h-12 w-12 bg-gray-400 rounded"></div>
                            //         <div className="flex flex-col space-y-2 w-full">
                            //             <div className="h-4 w-24 bg-gray-400 rounded"></div>
                            //             <div className="h-6 w-20 bg-gray-400 rounded"></div>
                            //         </div>
                            //     </div>
                            // ))
                        }
                    </div>
                )}
                {isSettings && (
                    <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
                        <ProfileSettings />
                        {
                            // [...Array(6)].map((_, idx) => (
                            //     <div
                            //         key={idx}
                            //         className="flex flex-row items-center gap-3 p-4 bg-gray-300 rounded w-full lg:w-1/3"
                            //     >
                            //         <div className="h-12 w-12 bg-gray-400 rounded"></div>
                            //         <div className="flex flex-col space-y-2 w-full">
                            //             <div className="h-4 w-24 bg-gray-400 rounded"></div>
                            //             <div className="h-6 w-20 bg-gray-400 rounded"></div>
                            //         </div>
                            //     </div>
                            // ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
