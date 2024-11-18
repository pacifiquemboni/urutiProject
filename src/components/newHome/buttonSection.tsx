import yes from "../../assets/newassets/yes.png"
import share from "../../assets/newassets/share.png"
import message from "../../assets/newassets/message.png"
import add from "../../assets/newassets/add.png"
import money from "../../assets/newassets/money.png"
const ButtonSection = () => {
  return (
    <div className="bg-[#19232c] w-full">
      <div className="mx-5 lg:mx-24 ">
        <div className="flex justify-between pt-4 mb-5">
          <div className="flex flex-wrap gap-5 w-80 lg:w-full ">
            <button className=" border flex items-center gap-2 px-2 py-1 bg-[rgba(123,140,152,.1)] border-[#4a5b68]">
              <img src={yes} alt="" />
              <p>Like This Game</p>
            </button>
            <button className=" border flex items-center gap-2 px-2 py-1 bg-[rgba(123,140,152,.1)] border-[#4a5b68]">
              <img src={add} alt="" />
              <p>My List</p>
            </button>
            <button className=" border flex items-center gap-2 px-2 py-1 bg-[rgba(123,140,152,.1)] border-[#4a5b68]">
              <img src={message} alt="" />
              <p>1 Comment</p>
            </button>
            <button className="hidden  lg:flex items-center gap-2 border px-2 py-1 bg-[rgba(123,140,152,.1)] border-[#4a5b68]">
              <img src={money} alt="" />
              <p>Play For Real Money</p>
            </button>
            <button className=" border flex items-center gap-2 px-2 py-1 bg-[rgba(123,140,152,.1)] border-[#4a5b68]">
              <img src={share} alt="" />
              <p>Share</p>
            </button>
          </div>
          <button className="hidden lg:block border px-2 py-1 bg-[rgba(123,140,152,.1)] border-[#4a5b68]">NB:</button>
        </div>
        <hr className="py-3"/>
      </div>
    </div>
  );
};

export default ButtonSection;
