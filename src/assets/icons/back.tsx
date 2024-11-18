import { CSSProperties } from "react";

type props = {
  className?: string;
  style?: CSSProperties;
};

export default function BackIcon({ className = "", style = {} }: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
      className={className}
      style={style}
    >
      <path
        d="M938.666667 512a426.666667 426.666667 0 1 0-426.666667 426.666667 426.666667 426.666667 0 0 0 426.666667-426.666667z m-506.026667 157.44l-122.026667-128a20.906667 20.906667 0 0 1-4.266666-6.4 23.04 23.04 0 0 1-4.266667-6.826667 40.106667 40.106667 0 0 1 0-32.426666 42.666667 42.666667 0 0 1 8.96-14.08l128-128a42.666667 42.666667 0 0 1 60.586667 60.586666L444.16 469.333333H682.666667a42.666667 42.666667 0 0 1 0 85.333334h-241.493334l53.333334 55.893333a42.666667 42.666667 0 0 1-61.866667 58.88z"
        fill="currentColor"
      />
    </svg>
  );
}
