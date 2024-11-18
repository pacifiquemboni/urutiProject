import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import css from "../style.module.scss";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

type props = {
  name?: string;
  id?: string;
  placeholder?: string;
  boxClassName?: string;
  label?: ReactNode | string;
  type?: React.HTMLInputTypeAttribute;
  inputMode?: "email" | "search" | "tel" | "text" | "url" | "none" | "numeric" | "decimal";
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  defaultValue?: string | number | readonly string[];
  value?: string;
  autoComplete?: string;
  pattern?: string;
  register?: object;
  error?: string | string[];
  onChange?: (
    e: ChangeEvent<HTMLInputElement>,
    { value, validValue }: { value?: string | number; validValue?: string | number },
  ) => void;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  options?: Array<any>;
  isTouched?: boolean;
  [otherOptions: string]: unknown;
};

export default function Input({
  name,
  id,
  placeholder = "",
  boxClassName = "",
  label = "",
  type = "text",
  inputMode,
  required = false,
  readOnly = false,
  autoFocus = false,
  defaultValue = "",
  value = "",
  autoComplete,
  pattern,
  register = {},
  error = "",
  onChange,
  onBlur,
  options,
  isTouched,
  ...props
}: props) {
  const defaultId = useId();
  const inputId = useMemo(() => id || defaultId, [defaultId, id]);
  const list = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [see, setSee] = useState(false);
  const type2 = useMemo(() => (type == "password" ? (see ? "text" : type) : type), [see, type]);

  const changed: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const value = e.target.value;
      const valid = options
        ? options.map((o) => (typeof o == "string" ? o : o.value)).filter((s) => s == value)[0]
        : value;
      if (onChange) onChange(e, { value, validValue: valid });
    },
    [onChange, options],
  );

  useEffect(() => {
    if (!inputRef.current || [undefined, null, NaN].includes(value as any)) return;
    if (value) inputRef.current.value = value;
  }, [value]);

  return (
    <label className={`${css.input} ${boxClassName}`} htmlFor={inputId}>
      {label && <span className={css.label}>{label}</span>}
      <input
        name={name}
        ref={inputRef}
        inputMode={inputMode || type == "number" ? "numeric" : "none"}
        type={type2}
        pattern={pattern}
        placeholder={placeholder}
        id={inputId}
        list={list}
        defaultValue={defaultValue ?? value}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        required={required}
        onChange={changed}
        onBlur={onBlur}
        readOnly={readOnly}
        {...register}
        {...props}
      />
      {options && Array.isArray(options) && options.length > 0 && (
        <datalist id={list}>
          {options.map((option) => (
            <option
              value={option?.value == "" ? "" : option?.value || option}
              key={option?.value == "" ? "" : option?.value || option}
            >
              {option?.text || option}
            </option>
          ))}
        </datalist>
      )}
      {isTouched && error && <span className={`error ${css.error}`}>{error}</span>}
      <div className={css.icons}>
        {type == "password" &&
          (see ? (
            <IconEye className="size-6 text-grey" onClick={() => setSee(false)} />
          ) : (
            <IconEyeClosed className="size-6 text-grey" onClick={() => setSee(true)} />
          ))}
      </div>
    </label>
  );
}
