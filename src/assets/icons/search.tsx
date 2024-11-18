import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function SearchIcon({ className = "", style = {} }: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M11.0209 20.125C16.049 20.125 20.1251 16.0489 20.1251 11.0208C20.1251 5.99274 16.049 1.91667 11.0209 1.91667C5.99282 1.91667 1.91675 5.99274 1.91675 11.0208C1.91675 16.0489 5.99282 20.125 11.0209 20.125Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0834 21.0833L19.1667 19.1667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
