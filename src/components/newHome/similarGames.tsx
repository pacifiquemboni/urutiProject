import vortex from "../../assets/newassets/vortex.png";

import { useState } from "react";
import Vortex from "./models/vortex";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const SimilarGames = () => {
  const [vortexOpen, setVortexOpen] = useState(false);
  const [vortexOpen1, setVortexOpen1] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#19232c] w-full z-100">
      <div className=" border border-red-600  mx-2 lg:mx-24">
        <h1 className="text-white font-bold text-3xl">Similar Games To BABI Spin The Wheel</h1>
        <Slider {...settings} className="relative  overflow-visible">
          <div
            className="relative h-auto w-fit "
            onMouseEnter={() => setVortexOpen(true)}
            onMouseLeave={() => setVortexOpen(false)}
          >
            <div>
              <img src={vortex} alt="" />
              <p>Vortex</p>
            </div>
            {vortexOpen && <Vortex />}
           
          </div>
          <div
            className="w-fit relative"
            onMouseEnter={() => setVortexOpen1(true)}
            onMouseLeave={() => setVortexOpen1(false)}
          >
            <div>
              <img src={vortex} alt="" />
              <p>Vortex</p>
            </div>
            {vortexOpen1 && <Vortex />}
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default SimilarGames;
