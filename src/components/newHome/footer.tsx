import { Checkbox } from "antd";
import CasinoLogo from "../../assets/newassets/casinoguru_logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#19232c]">
      <div className="mx-3 lg:mx-20 text-white ">
        <div className="flex lg:flex-row flex-col justify-between py-10">
          <img src={CasinoLogo} alt="Casino Logo" width={90} />
          <div>
            <p>Follow us</p>
            <div className="flex flex-row">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>instergram</p>
            </div>
          </div>
        </div>
        <hr  className="border border-[#4a5b68]"/>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex-1 lg:border-r border-[#4a5b68] p-5 ">
            <p>Gambling guide</p>
            <div>How to choose casino</div>
            <div>Games Of Chance: RTP and Variance</div>
            <div>Bonuses and Promotions</div>
            <div>Fair Gambling and Codex</div>
            <div>Responsible Gambling and help for problem gamblers</div>
            <hr className="lg:hidden" />
          </div>
          <div className="flex-1 lg:border-r  border-[#4a5b68] p-5">
            <p>GAMES GUIDE</p>
            <div>Slot machines</div>
            <div>Roulette</div>
            <div>Blackjacker</div>
            <div>Video poker</div>
            <div>Baccarat</div>
            <div>Craps</div>
            <hr className="lg:hidden" />
          </div>
          <div className="flex-1 lg:border-r border-[#4a5b68] p-5">
            <p>CASINO GURU</p>
            <div>Online Casinos</div>
            <div>Games</div>
            <div>Bonuses</div>
            <div>Complaints</div>
            <div>Forum</div>
            <div>Reviews</div>
            <div>ZOOMin</div>
            <div>News</div>
            <div>Casino Guru Awards</div>
            <hr className="lg:hidden" />
          </div>
          <div className="flex-1 p-5">
            <p>ABOUT US</p>
            <div>About us</div>
            <div>History</div>
            <div>Team</div>
            <div>Contact</div>
            <div>Terms of use</div>
          </div>
        </div>
        <hr className="border border-[#4a5b68]"/>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:border-r border-[#4a5b68] ">
            <div className="p-2">
              <div className="flex flex-row justify-between">
              <p>Casino Guru Academy</p>
              <p>arrow</p>
            </div>
            <p>
              Free professional educational courses for online casino employees aimed at industry
              best practices, improving player experience, and fair approach to gambling.
            </p>
            </div>
            
            <hr className="lg:hidden border border-[#4a5b68]" />
          </div>
          <div className="flex-1">
            <div className="p-2">
              <div className="flex flex-row justify-between">
              <p>Global Self-Exclusion Initiative</p>
              <p>arrow</p>
            </div>
            <p>
              An initiative we launched with the goal to create a global self-exclusion system,
              which will allow vulnerable players to block their access to all online gambling
              opportunities.
            </p>
            </div>
            
          </div>
        </div>
        <hr className="border border-[#4a5b68]"/>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:border-r border-[#4a5b68]">
            <div className="p-2">
              <div className="flex flex-row justify-between">
              <p>Gamtegrity</p>
              <p>arrow</p>
            </div>
            <p>
              A platform created to showcase all of our efforts aimed at bringing the vision of a
              safer and more transparent online gambling industry to reality.
            </p>
            </div>
            
            <hr className="lg:hidden border border-[#4a5b68]" />
          </div>
          <div className="flex-1">
            <div className="p-2">
              <div className="flex flex-row justify-between">
              <p>Casino Guru Awards</p>
              <p>arrow</p>
            </div>
            <p>
              An ambitious project whose goal is to celebrate the greatest and the most responsible
              companies in iGaming and give them the recognition they deserve.
            </p>
            </div>
            
          </div>
        </div>
        <hr className="border border-[#4a5b68]"/>
        <div className="h-52 flex justify-center items-center my-5">
          <div className=" flex flex-col  lg:w-1/2 text-white gap-4 my-5">
            <p>Subscribe to our newsletter</p>
            <div className="flex flex-col lg:flex-row gap-2">
              <input
                type="text"
                placeholder="Insert Your Email"
                className="p-3 w-full lg:w-2/3 border border-[#4a5b68] bg-transparent"
              />
              <button className="w-full lg:w-1/3 border border-[#4a5b68] p-3 bg-[#44be4c] font-bold">
                Subscribe
              </button>
            </div>
            <Checkbox className="text-white">
              I am at least 24 years old and legally allowed to play in a casino
            </Checkbox>
          </div>
        </div>
        <hr className="border border-[#4a5b68]"/>
        <div className="h-40">
          <p>Play responsibly and in moderation.</p>
        </div>
        <hr className="border border-[#4a5b68]"/>
        <div className="">
          <p>
            Casino.guru is an independent source of information about online casinos and online
            casino games, not controlled by any gambling operator. All our reviews and guides are
            created honestly, according to the best knowledge and judgement of the members of our
            independent expert team; however, they are intended for informative purposes only and
            should not be construed as, nor relied upon as, legal advice. You should always make
            sure that you meet all regulatory requirements before playing in any selected casino.
            Copyright ©2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
