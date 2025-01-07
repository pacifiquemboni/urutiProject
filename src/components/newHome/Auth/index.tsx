// import minus from "../../../assets/minus.svg";
// import add from "../../../assets/add.svg";
// import { useTranslation } from "react-i18next";

import { useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import ClientLogin from "./clientLogin";
import ClientSignup from "./clientSignup";

const Auth = () => {
  // const { t } = useTranslation();
  const [isLogin, setLogin] = useState(true)
  const [isSignup, setSignup] = useState(false)
  const { success } = useAppSelector((s) => s.user);


  const OpenLogin = (() => {
    setLogin(true)
    setSignup(false)
  })
  const OpenSignup = (() => {
    setLogin(false)
    setSignup(true)
  })
  useEffect(() => {
    if (success) {
      setSignup(false)
    }
  }, [success])

  return (
    <div className="py-5">
      <div className="text-black flex cursor-pointer ">
        <div onClick={OpenLogin} className={`p-3 ${isLogin ? "text-[#19232c] border-b-4 border-[#FF9671]" : ""}`}>LOGIN</div>
        <div onClick={OpenSignup} className={`p-3 ${isSignup ? " text-[#19232c] border-b-4 border-[#FF9671]" : ""}`}>SIGNUP</div>
      </div>
      <hr className="border border-[#FF9671]"/>
      {
        isLogin && (
          <div>
            <ClientLogin />
            <div className="flex flex-col items-center">
              <p className="text-sm flex text-center text-[#19232c]">
                Don't have an account?{" "}
                <span className="text-green-500 font-semibold">
                  <p onClick={OpenSignup}>Signup</p>
                </span>
              </p>
            </div>
          </div>
        )}
      {
        isSignup && (

          <div className=" flex flex-col items-center">

            <ClientSignup />
            <p className="font-bold flex gap-2 text-sm p-2 text-[#19232c]">
              Already have an account?{" "}
              <span className="text-green-500 font-semibold">
                
                <p onClick={OpenLogin}> Login</p>
              </span>
            </p>
          </div>



        )
      }

    </div>
  );
};

export default Auth;
