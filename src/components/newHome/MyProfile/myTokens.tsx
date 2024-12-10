import { GetTokensThunk } from "@/redux/features/actions/player";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";

const MyTokens = () => {
  const dispatch = useAppDispatch();
  const { tokens } = useAppSelector((s) => s.player) || {};
useEffect(()=>{
  dispatch(GetTokensThunk)
},[dispatch])

console.log("tokens:",tokens);

  const [isOngoingTokens, setOngoingToken] = useState(true);
  const [isWonTokens, setWonToken] = useState(false);
  const [isExpiredTokens, setExpiredToken] = useState(false);

  const handleOngoingTokens = () => {
    setOngoingToken(true);
    setWonToken(false);
    setExpiredToken(false);
  };
  const handleWonTokens = () => {
    setOngoingToken(false);
    setWonToken(true);
    setExpiredToken(false);
  };
  const handleExpiredTokens = () => {
    setOngoingToken(false);
    setWonToken(false);
    setExpiredToken(true);
  };
  return (
    <div className="w-full p-2 lg:p-5">
      <div className="flex">
        {/* <p className="border min-w-10 w-fit text-center p-2">All</p> */}
        <p
          onClick={handleOngoingTokens}
          className={`min-w-10 text-sm w-fit text-center p-2 cursor-pointer rounded-t ${
            isOngoingTokens ? "bg-white border-b-2 border-[#FF9671] text-[#FF9671]" : "border"
          }`}
        >
          Ongoing Tokens
        </p>
        <p
          onClick={handleWonTokens}
          className={`min-w-10 w-fit text-center p-2 cursor-pointer rounded-t ${
            isWonTokens ? "bg-white border-b-2 border-[#FF9671] text-[#FF9671]" : "border"
          }`}
        >
          Won Tokens
        </p>
        <p
          onClick={handleExpiredTokens}
          className={`min-w-10 w-fit text-center p-2 cursor-pointer rounded-t ${
            isExpiredTokens ? "bg-white border-b-2 border-[#FF9671] text-[#FF9671]" : "border"
          }`}
        >
          Expired Tokens
        </p>
      </div>
      <hr />
      <div
        className="overflow-scroll h-128 md:h-96 lg:h-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {isOngoingTokens && (
          <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
            {[...Array(15)].map((_, idx) => (
              <div
                key={idx}
                className="flex flex-row items-center gap-3 p-4 bg-gray-300 rounded w-full lg:w-1/3"
              >
                <div className="h-12 w-12 bg-gray-400 rounded"></div>
                <div className="flex flex-col space-y-2 w-full">
                  <div className="h-4 w-24 bg-gray-400 rounded"></div>
                  <div className="h-6 w-20 bg-gray-400 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}
        {isWonTokens && (
          <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="flex flex-row items-center gap-3 p-4 bg-gray-300 rounded w-full lg:w-1/3"
              >
                <div className="h-12 w-12 bg-gray-400 rounded"></div>
                <div className="flex flex-col space-y-2 w-full">
                  <div className="h-4 w-24 bg-gray-400 rounded"></div>
                  <div className="h-6 w-20 bg-gray-400 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}
        {isExpiredTokens && (
          <div className="flex flex-row lg:flex-row flex-wrap gap-3 py-2">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="flex flex-row items-center gap-3 p-4 bg-gray-300 rounded w-full lg:w-1/3"
              >
                <div className="h-12 w-12 bg-gray-400 rounded"></div>
                <div className="flex flex-col space-y-2 w-full">
                  <div className="h-4 w-24 bg-gray-400 rounded"></div>
                  <div className="h-6 w-20 bg-gray-400 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTokens;
