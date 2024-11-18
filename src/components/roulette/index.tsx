import css from "./style.module.scss";
import image1 from "./img/roulette_11.png";
import image2 from "./img/roulette_2.png";
import image3 from "./img/roulette_3.png";
import image4 from "./img/roulette_4.png";
import image5 from "./img/roulette_5.png";
import logo from "./img/logo.png";
import sound from "./audio/Roulette Wheel Sound Effect (1).mp3";
import { useCallback, useEffect, useRef } from "react";
import { rouletteWheelNumbers } from "./values";

type props = {
  winningBet?: number;
  timer?: number;
  start?: boolean;
  loading?: boolean;
};
export default function Roulette({ winningBet, timer, start, loading }: props) {
  const spinner = useRef<HTMLDivElement>(null);
  const ballSpinner = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const calcAngle = useCallback(() => {
    const valIndex = rouletteWheelNumbers.findIndex((a) => a == winningBet);

    // set spin rounds
    const min = 20;
    const max = 25;
    const spins = Math.floor(min + Math.random() * (max - min - 1));

    const defaultAngle = ballSpinner?.current
      ? Number(
          getComputedStyle(ballSpinner?.current)
            ?.getPropertyValue?.("--rotate-angle")
            ?.split("deg")?.[0],
        )
      : 0;

    const angle = (valIndex / rouletteWheelNumbers.length) * 360 - 360 * (spins + 1);

    return {
      number: winningBet,
      valIndex,
      angle: angle + defaultAngle - (defaultAngle % 360),
    };
  }, [winningBet]);

  const spin = useCallback(() => {
    // set timer
    ballSpinner?.current?.style?.setProperty("--timer", `${timer || 7}s`);

    // set angle
    ballSpinner?.current?.style?.setProperty("--rotate-angle", `${calcAngle().angle || 0}deg`);

    // play audio
    audioRef.current?.play();
  }, [calcAngle, timer]);

  useEffect(() => {
    start && spin();
  }, [spin, start]);

  return (
    <div className={css.roulette} ref={spinner}>
      <img src={image1} />
      <div className={`${css.roulette} ${css.spinner}`} ref={ballSpinner}>
        <img src={image2} className={``} />
        <div className={css.ball}>
          <span></span>
        </div>
      </div>
      <img src={image3} />
      <img src={image4} />
      <img src={image5} />
      <img src={logo} className={`${css.logo} ${loading ? css.loading : ""}`} />
      <audio src={sound} ref={audioRef} />
    </div>
  );
}
