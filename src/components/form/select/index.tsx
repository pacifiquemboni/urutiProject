import { ChangeEventHandler, ReactNode, useEffect, useId, useMemo, useRef } from "react";
import css from "../style.module.scss";
import { Sb } from "@/components/etc/elements";

type props = {
  placeholder?: string;
  label?: ReactNode | string;
  defaultValue?: string;
  boxClassName?: string;
  value?: string;
  id?: string;
  autoComplete?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  isTouched?: boolean;
  error?: string | string[] | undefined;
  register?: any;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options?: Array<any>;
  children?: ReactNode;
  [otherOptions: string]: unknown;
};

export default function Select({
  placeholder = "",
  label = "",
  required,
  defaultValue = "",
  boxClassName = "",
  value = "",
  id,
  autoComplete,
  name,
  disabled,
  register = {},
  onChange = () => null,
  options,
  children,
  error = "",
  isTouched,
  ...other
}: props) {
  const selectId = useId();
  const inputRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (!inputRef.current || typeof value == "string") return;
    inputRef.current.value = value;
  }, [value]);

  const defaultString = useMemo(() => {
    const index =
      options?.findIndex((i) =>
        [defaultValue, value].includes(typeof i == "string" ? i : i?.value),
      ) ?? -1;

    if (index !== -1)
      return typeof options?.[index] == "string" ? options?.[index] : options?.[index]?.text;
    return undefined;
  }, [defaultValue, options, value]);

  return (
    <label htmlFor={id || selectId} className={`${css.input} ${boxClassName}`}>
      {label && (
        <span className={css.label}>
          {label}
          {defaultString && <Sb>{defaultString}</Sb>}
        </span>
      )}

      <select
        ref={inputRef}
        required={required}
        name={name}
        id={id || selectId}
        disabled={disabled}
        onChange={onChange}
        autoComplete={autoComplete}
        defaultValue={value || defaultValue || placeholder || ""}
        {...register}
        {...other}
      >
        {placeholder && (
          <option value="" className={`${css.placeholder} grey`}>
            {placeholder}
          </option>
        )}
        {options && Array.isArray(options) && options.length > 0
          ? options.map((option) => (
              <option
                value={option?.value == "" ? "" : option?.value || option}
                key={option?.value == "" ? "" : option?.value || option}
              >
                {option?.text || option}
              </option>
            ))
          : children}
      </select>
      {isTouched && error && <span className={`error ${css.error}`}>{error}</span>}
    </label>
  );
}
