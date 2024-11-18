import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function MenuBarsIcon({ className, style }: props) {
  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M1 1H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M1 6H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M1 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
