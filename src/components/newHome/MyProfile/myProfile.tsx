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
import { GetUserThunk } from "@/redux/features/actions/users/me";

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
    const handleSettings = () => {
        setBalance(false);
        setMytokens(false);
        setSettings(true);
        dispatch(GetUserThunk());
    };

    const click = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);
    return (
        <div className=" flex flex-row justify-between  py-5">
            <div className="flex flex-col w-full lg:w-80  drop-shadow-xl bg-white rounded-xl text-[#19232c] h-auto lg:h-96">
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
                <div className="lg:hidden">
                    {isBalance && (
                        <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
                            <Balance />
                        </div>
                    )}
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
                <div className="lg:hidden">
                    {isMytokens && (
                        <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
                            <MyTokens />
                        </div>
                    )}
                </div>
                <div
                    onClick={handleSettings}
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
                <div className="lg:hidden">
                    {isSettings && (
                        <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
                            <ProfileSettings />
                        </div>
                    )}
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
                            {/* <img src={arrowright} alt="" className="w-3 h-3" /> */}
                        </div>

                        <hr />
                    </div>
                </div>
            </div>

            <div
                className=" hidden lg:block lg:h-auto w-[68%] bg-white rounded-xl relative drop-shadow-xl"

            >
                {isBalance && (
                    <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
                        <Balance />
                    </div>
                )}
                {isMytokens && (
                    <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
                        <MyTokens />
                    </div>
                )}
                {isSettings && (
                    <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
                        <ProfileSettings />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
