import Roulette from "@/components/roulette";
import backImage from "@assets/img/background_2.png";
import { useParams, useSearchParams } from "react-router-dom";
import {
  CSSProperties,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import css from "./style.module.scss";
import Nav from "./nav";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import RouletteSinglePage from "./single";
import { GetDrawThunk } from "@/redux/features/actions/draw";
import Button from "./button";
import moment from "moment";

export default function RoulettePage() {
  const sectionRef = useRef<HTMLSelectElement>(null);

  const [o, setOne] = useState(0);
  const timer = useMemo(() => 18, []);
  const [start, setStart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [winningBet, setWinningBet] = useState(-1);
  const [params] = useSearchParams();
  const { user } = useAppSelector((s) => s.user);

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    listById,
    winners: { list, status },
  } = useAppSelector((s) => s.draw);

  const doSpin = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 37);
    setWinningBet(randomNumber);
    setStart(true);

    setTimeout(
      () => {
        setStart(false);
        setIsOpen(true);
      },
      (timer + 1) * 1000,
    );
  }, [timer]);

  const getData = useCallback(
    async (data: any = {}) => {
      try {
        if (user?.attributes?.radioId?.length == 1)
          data.radioId = user?.attributes?.radioId?.[0] || data?.radioId;

        await dispatch(GetDrawThunk(data)).unwrap();
        setOne(1);
      } catch (error) {
        // error
      }
    },
    [dispatch, user?.attributes?.radioId],
  );

  useEffect(() => {
    document.body?.requestFullscreen()?.catch((error) => {
      console.log({ error });
    });

    return () => {
      const isFull = document.fullscreenElement;
      if (isFull)
        document?.exitFullscreen()?.catch((error) => {
          console.log({ error });
        });
    };
  }, []);

  useLayoutEffect(() => {
    if (o == 0) getData({});
  }, [getData, o]);

  return (
    <section
      className={`${css.roulette_back} grid min-h-dvh bg-cover bg-center`}
      style={
        {
          "--back-image": `url(${backImage})`,
          // backgroundImage: `url(${backImage})`,
        } as CSSProperties
      }
      ref={sectionRef}
    >
      {/* roulette spinner */}
      <div className={css.roulette}>
        <div className="size-[35rem] mx-auto">
          <Roulette
            loading={status == "pending"}
            winningBet={winningBet}
            start={start}
            timer={timer}
          />
        </div>
        <Button start={start} doSpin={doSpin} draw={listById[`${id}`]?.[0]} />
      </div>

      {/* nav links */}
      <Nav start={start} />
      {params?.get("img") && (
        <img
          src={`${params?.get("img")}`}
          className="absolute inset-40 object-contain mr-auto my-auto w-60 h-auto rounded-lg border-opacity-10 border-2 border-solid border-white bg-white bg-opacity-15 backdrop-blur-md"
        />
      )}
      {params?.get("s") && params?.get("e") && (
        <div className="absolute inset-x-0 mx-0 bottom-0 flex justify-center bg-gradient-to-b from-transparent to-60% to-[#060020] ">
          <p className="text-white text-2xl py-4 pt-8 font-medium flex gap-4">
            {params?.get("q") && <small>{params?.get("q")}:</small>}
            <span>
              {moment(params?.get("s")).format("MMM DD")} -{" "}
              {moment(params?.get("e")).format("MMM DD")}
            </span>
          </p>
        </div>
      )}

      {/* Output modal */}
      {listById[`${id}`] && (
        <RouletteSinglePage
          winners={list}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          winningBet={winningBet}
          draw={listById[`${id}`]?.[0]}
        />
      )}
    </section>
  );
}
