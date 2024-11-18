import { ChangeEventHandler, ReactNode, useId, useState } from "react";
import css from "../style.module.scss";

type resizeType = "none" | "both" | "horizontal" | "vertical" | "block" | "inline";

type props = {
  placeholder?: string;
  label?: ReactNode | string;
  required?: boolean;
  boxClassName?: string;
  defaultValue?: string;
  value?: string;
  register?: object;
  error?: string;
  isTouched?: boolean;
  resize?: resizeType;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  [otherOptions: string]: unknown;
};

export default function Textarea({
  placeholder = "",
  label = "",
  required,
  boxClassName = "",
  resize = "vertical",
  defaultValue = "",
  register = {},
  error = "",
  isTouched,
  onChange = () => {},
  ...props
}: props) {
  const id = useId();

  const [resizeStyle] = useState((): resizeType => {
    if (resize.toLowerCase() === "vertical") return "vertical";
    if (resize.toLowerCase() === "horizontal") return "horizontal";
    return "vertical";
  });

  return (
    <label className={`${css.input} ${boxClassName}`}>
      {label && <span className={css.label}>{label}</span>}
      <textarea
        placeholder={placeholder}
        defaultValue={defaultValue}
        id={id}
        required={required}
        style={{ resize: `${resizeStyle}` }}
        onChange={onChange}
        {...register}
        {...props}
      />
      {isTouched && error && <span className={`error ${css.error}`}>{error}</span>}
    </label>
  );
}
