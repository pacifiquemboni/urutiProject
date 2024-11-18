import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function PlayIcon({ className = "", style = {} }: props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.5C17.2459 2.5 21.5 6.75315 21.5 12C21.5 17.2469 17.2459 21.5 12 21.5C6.75315 21.5 2.5 17.2469 2.5 12C2.5 6.75315 6.75315 2.5 12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 11.9951C15 11.184 10.8425 8.58912 10.3709 9.0557C9.8993 9.52228 9.85395 14.424 10.3709 14.9346C10.8879 15.4469 15 12.8063 15 11.9951Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayCircled({ className = "", style = {} }: props) {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 1.45837C39.5519 1.45837 50.5416 12.4457 50.5416 26C50.5416 39.5544 39.5519 50.5417 26 50.5417C12.4456 50.5417 1.45831 39.5544 1.45831 26C1.45831 12.4457 12.4456 1.45837 26 1.45837Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.75 25.9875C33.75 23.892 23.0098 17.1886 21.7915 18.3939C20.5732 19.5992 20.456 32.2621 21.7915 33.581C23.127 34.9046 33.75 28.0829 33.75 25.9875Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
