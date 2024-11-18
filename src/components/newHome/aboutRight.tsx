// import spin from "../../assets/newassets/spin.png";
// import message from "../../assets/newassets/message.png";
import arrow from "../../assets/newassets/arrow-right-2817.png";
const AboutRight = () => {
  return (
    <div className="w-full ml-1 lg:ml-10  mb-10 text-white flex flex-col gap-5 py-5">
      <div className="hidden lg:block">
        <h1 className="text-3xl font-bold">Spin the Wheel</h1>
        <p className="text-xl">
          Spin the Wheel game online for free in demo mode. Play free casino games, no download and
          no registration required.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-3">
        <div className="w-full lg:w-1/2 border border-[#4a5b68] border-l-4 border-l-[#44be4c] bg-[#222e38]">
          <div className="flex flex-row justify-between p-2">
            <p className="text-2xl font-semibold">Return to player</p>
            <p className="border w-5 h-5 rounded-xl text-center">i</p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold">97.47%</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 border border-[#4a5b68]  border-l-4 border-l-[#44be4c] bg-[#222e38]">
          <div className="p-2">
            <p className="text-2xl font-semibold">Game Type</p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold">Other games</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="w-full lg:w-1/2 border border-[#4a5b68] border-l-4 border-l-[#44be4c] bg-[#222e38]">
          <div className="p-2">
            <p className="text-2xl font-semibold">Max Win</p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold">Unknown</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 border border-[#4a5b68] border-l-4 border-l-[#44be4c] bg-[#222e38]">
          <div className="p-2">
            <p className="text-2xl font-semibold">Payout system</p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold">Winlines</p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold">About game provider</h1>
      <div className="w-full border border-[#4a5b68] flex flex-col lg:flex-row justify-between h-56">
        <div className="flex flex-1 bg-[#222e38] items-center justify-center">
          <p>woohoo</p>
        </div>
        <div className=" flex flex-1  items-center justify-center">
          <p className="text-3xl font-semibold">WOOHOO GAMES</p>
        </div>
        <div className="flex flex-col flex-1 justify-center  p-2 gap-3">
          <div className="flex justify-between p-3 border border-[#4a5b68]">
            <div>
              <p>Games(45)</p>
            </div>

            <img src={arrow} alt="" />
          </div>
          <div className="flex justify-between p-3 border border-[#4a5b68]">
            <div>
              <p>Real-money casinos (45)</p>
            </div>

            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRight;
