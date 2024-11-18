import { useState } from "react";
import FullScreen from "react-fullscreen-crossbrowser";
import resize from "../../assets/newassets/resize.png";
import wheel from "../../assets/newassets/144.jpg";
import video from "../../assets/babivideo.mp4";
// import money from "../../assets/newassets/money.png"
import ButtonSection from "./buttonSection";

const DEMO = () => {
  const [isFullscreenEnabled, setIsFullscreenEnabled] = useState(false);
  return (
    <>
      <div className="  bg-orange-gradient flex items-center py-2 lg:p-5">
        <div
          className=" lg:mx-24 w-full h-auto  relative border border-[#4a5b68]"
          style={{
            boxShadow: "6px 6px 6px rgba(0, 0, 0, 1)", // Updated shadow for better effect
          }}
        >
          <div className="h-96 w-full relative overflow-hidden">
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
                  Unlock a Cascade of Rewards—The More You Play, the More You Win!
                </h1>
              </div>

              <div className="h-96 full-screenable-node text-white">
                <img src={wheel} alt="" className="w-full h-full absolute" />{" "}
                <div className="absolute z-0  bg-black/50 w-full h-full flex items-center justify-center shadow-xl">
                  <div className="flex aspect-video bg-neutral-800 rounded">
                    <video
                      src={video}
                      itemType="video/mp4"
                      autoPlay
                      muted
                      loop
                      className="size-full min-w-full rounded"
                    />
                  </div>
                </div>
              </div>
            </FullScreen>
          </div>
          <ButtonSection />
        </div>
      </div>
    </>
  );
};

export default DEMO;
