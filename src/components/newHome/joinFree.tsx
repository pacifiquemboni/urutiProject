// import { url } from "inspector";
import play from "../../assets/newassets/play.png";
import wolfbg from "../../assets/newassets/wolfbg.png"

const JoinFree = () => {
  return (
    <div
      className="mx-1 lg:mx-24 border h-auto lg:h-44 my-10 "
      style={{backgroundImage:`url(${wolfbg})`}}
    >
      <div className="flex flex-col lg:flex-row bg-black/70 h-full justify-between items-center p-4 text-white">
        <p className="text-yellow-600 font-bold text-3xl w-48 text-center">WOLF GOLD ULTIMATE</p>
        <div>
          <p className="font-bold text-3xl text-center lg:text-left">Try our new FREE slot tournaments</p>
          <p className="font-bold text-lg text-center">Join the community, and get access to special tournaments and giveaways!</p>
        </div>
        <div className="w-64 h-20 bg-green-gradient flex justify-center items-center gap-3">
          <div>
            <img src={play} alt="" />
          </div>
          <div className="">
            <h1>PLAY FOR FREE</h1>
            <p>100% free/ No limits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinFree;
