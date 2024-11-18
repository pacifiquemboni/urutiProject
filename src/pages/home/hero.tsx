import { IconArrowRight } from "@tabler/icons-react";
import css from "./style.module.scss";
import video from "@assets/vunavideo.mp4";
import { HashLink } from "react-router-hash-link";
import backImage from "./background.svg";
import { FacebookIcon, InstagramIcon, TelIcon, TicketIcon } from "@/assets/icons";

const WelcomeSection = () => {
  return (
    <section
      id="home"
      className={`${css.box} relative z-0 min-h-[85vh] full-width bg-black text-white`}
    >
      <div
        className="size-full absolute bg-center z-0 bg-cover top-0"
        style={{ backgroundImage: `url(${backImage})` }}
      />
      <div className="flex items-center py-4 z-10 max-md:flex-col max-md:py-20 flex-wrap gap-4 gap-y-10 capitalize">
        <div className="flex-[0.9] flex flex-col gap-8 max-md:text-center max-md:items-center">
          <div className={`h-2 w-28 rounded bg-primary max-md:h-1`} />
          <h1 className="max-w-[20ch] md:text-3xl ">
            Win an IST car every day! <br className="max-lg:hidden" /> And a Bonus of{" "}
            <span className={`${css.gradient} ${css.text}`}>10 Million</span> to ten winners every
            day
          </h1>
          <div className="[&>button]:!capitalize">
            <HashLink to={"#how"}>
              <button
                className={`${css.button} cursor-pointer w-52 max-w-[30ch] flex items-center justify-center gap-2 py-6 rounded-3xl text-white font-semibold`}
              >
                Start Now <IconArrowRight className="size-4" />
              </button>
            </HashLink>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex aspect-video bg-neutral-800 rounded-xl">
            <video
              src={video}
              itemType="video/mp4"
              autoPlay
              muted
              loop
              className="size-full min-w-full rounded-xl"
            />
          </div>
          <div className="flex justify-between gap-4">
            <div className={`${css.sm_card} px-6 py-4 bg-neutral-800 rounded-xl`}>
              <div className="flex items-center gap-3">
                <TicketIcon />
                <span>1000 Tsh / Ticket</span>
                <span className="ml-auto"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:pl-[3vw] md:flex-col justify-between max-md:w-[min(100%,12rem)] md:h-[min(100%,12rem)]">
          <HashLink to="#down">
            <FacebookIcon />
          </HashLink>
          <HashLink to="#down">
            <InstagramIcon />
          </HashLink>
          <HashLink to="#down">
            <TelIcon />
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
