import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function TrashIcon({ className = "", style = {} }: props) {
  return (
    <svg
      height="1em"
      viewBox="0 0 19 26"
      fill="nfile"
      xmlns="http://www.w3.org/2000/svg"
      className={`error ${className}`}
      style={style}
      data-testid="remove-image"
    >
      <path
        d="M1.35714 22.7222C1.35714 24.25 2.57857 25.5 4.07143 25.5H14.9286C16.4214 25.5 17.6429 24.25 17.6429 22.7222V6.05556H1.35714V22.7222ZM4.07143 8.83333H14.9286V22.7222H4.07143V8.83333ZM14.25 1.88889L12.8929 0.5H6.10714L4.75 1.88889H0V4.66667H19V1.88889H14.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
