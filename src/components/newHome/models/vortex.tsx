
import yes from "../../../assets/newassets/yes.png";
import play from "../../../assets/newassets/play.png";
import add from "../../../assets/newassets/add.png";
import vortex from "../../../assets/newassets/vortex.png";


const Vortex = () => {
  return (
    <div className="flex flex-col w-72 h-128 gap-2 absolute inset-0 z-100 border border-red-700 p-3  top-0  bg-[#19232c]">
        <img src={vortex} alt="" />
        <div className="flex flex-row">
          <h1 className="font-extrabold text-white  text-3xl">Vortex(Turb Games)</h1>
          <button className="  border flex items-center gap-2 px-2 py-1   ">
            <div className="border-r flex flex-row p-2 gap-2 text-white justify-center">
              <img src={yes} alt="" />
              <p>65</p>
            </div>
            <div className="flex flex-row p-2 gap-2 text-white font-bold">
              <img src={yes} alt="" />
            </div>
          </button>
        </div>
        <div className="w-full h-20 bg-green-gradient flex justify-center items-center gap-3">
          <div>
            <img src={play} alt="" />
          </div>
          <div className="">
            <h1>PLAY FOR FREE</h1>
            <p>100% free/ No limits</p>
          </div>
        </div>
        <button className="border border-[#4a5b68]  flex items-center gap-2 px-2 py-1   ">
              <img src={add} alt="" />
              <p>My List</p>
            </button>
        <button className="border  border-[#4a5b68] flex items-center gap-2 px-2 py-1   ">
          <p>More Info</p>
        </button>
      </div>
  );
};

export default Vortex;
