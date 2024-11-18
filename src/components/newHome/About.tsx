import AboutLeft from "./AboutLeft";
import AboutRight from "./aboutRight";
import Casinos from "./casinos";
import JoinFree from "./joinFree";


const About = () => {
  return (
    <div className="bg-[#19232c] py-10">
      <div className="mx-2 lg:mx-24 flex flex-col lg:flex-row text-white">
        <div className=" lg:hidden">
          <h1 className="text-3xl font-bold">Spin the Wheel</h1>
          <p className="text-xl">
            Spin the Wheel game online for free in demo mode. Play free casino games, no download
            and no registration required.
          </p>
        </div>
        <AboutLeft />
        <AboutRight />
      </div>
    <JoinFree />
    <Casinos />

    </div>
  );
};

export default About;
