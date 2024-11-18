import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function StarIcon({ className = "", style = {} }: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M25 12.9911C20.0963 13.4366 17.2789 13.8464 15.5492 15.2006C13.5164 16.7865 13.035 19.691 12.5 25.5C11.9472 19.4772 11.4479 16.5905 9.21897 15.0403C7.4893 13.8286 4.68973 13.4366 0 13.0089C4.88588 12.5634 7.72111 12.1536 9.43295 10.8172C11.4836 9.21347 11.965 6.3268 12.5 0.5C12.9993 5.86351 13.4451 8.73236 15.1034 10.3895C16.7618 12.0467 19.6505 12.51 25 12.9911Z"
        fill="white"
      />
    </svg>
  );
}
