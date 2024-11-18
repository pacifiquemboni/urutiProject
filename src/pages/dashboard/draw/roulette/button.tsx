import { GetRandomTokenThunk } from "@/redux/features/actions/draw";
import { useAppDispatch } from "@/redux/hook";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

type props = {
  start: boolean;
  doSpin: () => void;
  draw?: any;
};

export default function Button({ start, doSpin, draw }: props) {
  const [load, setLoad] = useState(false);
  const dispatch = useAppDispatch();

  const getTokens = useCallback(async () => {
    try {
      setLoad(true);
      await dispatch(GetRandomTokenThunk(draw?.drawId)).unwrap();
      doSpin?.();
    } catch (error: any) {
      toast(error?.response?.data?.message || "Something went wrong", {
        type: "error",
        hideProgressBar: true,
      });
    } finally {
      setLoad(false);
    }
  }, [dispatch, doSpin, draw?.drawId]);

  return (
    <button
      type="button"
      disabled={start || !draw || load}
      onClick={getTokens}
      className={`${!draw ? "hover:!opacity-80 !bg-grey" : ""} `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="size-8">
        <path
          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
