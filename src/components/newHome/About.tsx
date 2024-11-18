import AboutLeft from "./AboutLeft";
import AboutRight from "./aboutRight";
// import Casinos from "./casinos";
import JoinFree from "./joinFree";


const About = () => {
  return (
    <div className="bg-[#19232c] py-10">
      <div className="mx-2 lg:mx-24 flex flex-col lg:flex-row text-white">
        <div className=" lg:hidden">
        <h1 className="text-3xl font-bold">Join the thrill of Babi Games</h1>
        <p className="text-xl">
          where every play brings you closer to life-changing prizes!
          From cash rewards to dream gadgets, there's something for everyone. Don’t just watch
          others win—be the next big winner today!
        </p>
        </div>
        <AboutLeft />
        <AboutRight />
      </div>
    <JoinFree />
    {/* <Casinos /> */}

    </div>
  );
};

export default About;
