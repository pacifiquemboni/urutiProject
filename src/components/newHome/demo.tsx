import { useState } from "react";
import FullScreen from "react-fullscreen-crossbrowser";
import resize from "../../assets/newassets/resize.png";
import wheel from "../../assets/newassets/Spin-the-Wheel.jpg";
import play from "../../assets/newassets/play.png"
import money from "../../assets/newassets/money.png"
import ButtonSection from "./buttonSection";

const DEMO = () => {
  const [isFullscreenEnabled, setIsFullscreenEnabled] = useState(false);
  return (
    <>
    <div className="h-96  bg-purple-black-gradient flex items-center ">
      <div className="mx-2 lg:mx-24 h-80 w-full relative overflow-hidden">
        <div className="hidden lg:block absolute right-1 p-2">
          <button onClick={() => setIsFullscreenEnabled(true)}>
            {" "}
            <img src={resize} alt="" />{" "}
          </button>
        </div>

        <FullScreen
          enabled={isFullscreenEnabled}
          onChange={(isFullscreen) => setIsFullscreenEnabled(isFullscreen)}
        >
          <div className="flex flex-row justify-between bg-[#19232c] p-2">
            <h1 className="w-full  text-center text-white font-bold">
              Spin the Wheel Free Play in Demo Mode by{" "}
              <a href="" className="font-normal">
                Woohoo Games
              </a>
            </h1>
          </div>

          <div className="full-screenable-node text-white">
            <img src={wheel} alt="" className="w-full h-full absolute" />{" "}
            <div className="absolute z-10  bg-black/50 w-full h-full flex items-center justify-center">
              <div className="flex flex-col gap-3">
                <div className="w-64 h-20 bg-green-gradient flex justify-center items-center gap-3">
                  <div>
                    <img src={play} alt="" />
                  </div>
                  <div className="">
                    <h1>PLAY FOR FREE</h1>
                    <p>100% free/ No limits</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-3 w-64 h-10  bg-black-gradient">
                <img src={money} alt="" />
                <p>Play For Real Money</p>
                </div>
              </div>
            </div>
          </div>
        </FullScreen>
      </div>

    </div>
    <ButtonSection />
    
    </>
    
  );
};

export default DEMO;
