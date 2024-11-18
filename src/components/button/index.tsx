import { LegacyRef, MouseEventHandler, ReactNode } from "react";
import css from "./style.module.scss";

type props = {
  children?: ReactNode;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  outlined?: boolean;
  oneline?: boolean;
  bordered?: boolean;
  size?: "sm" | "xsm" | "xsm2" | "xsm3";
  progress?: "complete" | "success" | "pending" | "warning" | "fail";
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ref?: LegacyRef<HTMLButtonElement>;
};

export default function Button({
  children,
  type = "button",
  outlined,
  oneline,
  bordered = true,
  icon = <></>,
  size,
  progress,
  className = "",
  onClick = () => {},
  disabled,
  ref,
  ...others
}: props) {
  return (
    <button
      ref={ref}
      type={type}
      className={`${css.button} ${!bordered ? css.no_border : ""} ${
        outlined && css.outlined
      } ${oneline && css.oneline} ${size && css[`size_${size}`]} ${
        progress && css[`progress_${progress}`]
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...others}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
