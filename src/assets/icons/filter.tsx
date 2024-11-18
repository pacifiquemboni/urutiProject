import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function FilterIcon({ className = "", style = {} }: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <path d="M22 7L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 12L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
