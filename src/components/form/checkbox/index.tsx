import { useId, useMemo } from "react";
import css from "../style.module.scss";

type props = {
  name?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  label?: React.ReactNode | string;
  children?: React.ReactNode;
  type?: "checkbox" | "radio";
  inputMode?: "email" | "search" | "tel" | "text" | "url" | "none" | "numeric" | "decimal";
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  defaultValue?: string | number | readonly string[];
  value?: string;
  autoComplete?: string;
  pattern?: string;
  register?: object;
  error?: string | undefined;
  flip?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    { value, validValue }: { value?: string | number; validValue?: string | number },
  ) => void;
  options?: Array<any>;
  [otherOptions: string]: unknown;
};

export default function Checkbox({
  type = "checkbox",
  name,
  id,
  value,
  label,
  flip,
  children,
  className,
}: props) {
  const defaultId = useId();
  const inputId = useMemo(() => id || defaultId, [defaultId, id]);

  return (
    <label
      htmlFor={inputId}
      className={`${css.chechbox} ${className}`}
      style={flip ? { padding: 0, flexDirection: "column", width: "fit-content" } : {}}
    >
      <input type={type} name={name} defaultValue={value} id={inputId} />
      {flip ? (
        <>
          <p>{label || children}</p>
          <span className={css.input_btn} data-tg-off="Pending" data-tg-on="Delivered" />
        </>
      ) : (
        <span>{label || children}</span>
      )}
    </label>
  );
}
