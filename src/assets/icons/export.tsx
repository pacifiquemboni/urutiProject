import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function ExportIcon({ className = "", style = {} }: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      style={style}
      className={className}
    >
      <path
        d="M10.0001 2.16667C5.40008 2.16667 1.66675 5.9 1.66675 10.5C1.66675 15.1 5.40008 18.8333 10.0001 18.8333C14.6001 18.8333 18.3334 15.1 18.3334 10.5"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8333 9.66667L17.6666 2.83337"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 6.19167V2.16667H14.3083"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
