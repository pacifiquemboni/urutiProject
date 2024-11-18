import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export function Rigth({ className = "", style = {} }: props) {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M15.75 7.72559L0.75 7.72559"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.7002 1.70124L15.7502 7.72524L9.7002 13.7502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DownLine({ className = "", style = {} }: props) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g clipPath="url(#clip0_3_8)">
        <path
          d="M12.8333 1.08333L7 6.91667L1.16667 1.08333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
