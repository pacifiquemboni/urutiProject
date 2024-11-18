import spin from "../../assets/newassets/spin.png";
import message from "../../assets/newassets/message.png";
import embended from "../../assets/newassets/guru-embed-code.png";
const AboutLeft = () => {
  return (
    <div>
      {/* about left */}
      <div className="w-full lg:w-80  text-white flex flex-col gap-5">
        <div className="border border-[#4a5b68] bg-[#222e38]">
          <img src={spin} alt="" className="w-full" />
          <div className="flex gap-2 justify-center py-3">
            <img src={message} alt="" />
            <h1 className="text-center">GAME INFORMATION</h1>
          </div>

          <div className="p-3">
            <table className=" w-full">
              <tr className="text-left">
                <th>
                  <h3>Game Developer</h3>
                </th>
                <th className="w-6">
                  <h3>Woohoo Games</h3>
                </th>
              </tr>
              <tbody>
                <tr>
                  <td>
                    <p>Progresive Jackpot</p>
                  </td>
                  <td className="text-right">x</td>
                </tr>
                <tr>
                  <td>
                    <p>configurable Winlines</p>
                  </td>
                  <td className="text-right">x</td>
                </tr>
                <tr>
                  <td>
                    <p>Gamble feature</p>
                  </td>
                  <td className="text-right">x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="hidden lg:block border border-[#4a5b68] bg-[#222e38]">
          <div className="flex items-center p-3">
            <img src={embended} alt="" />
            <h1 className="text-center">Feel Free to add this game to your website.</h1>
          </div>
          <hr />
          <div className="bg-[#44be4c] m-4 h-10 text-center">
            <h1 className="">Copy Embed Code</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
