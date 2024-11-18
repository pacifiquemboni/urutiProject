import {
  ChangeEvent,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import css from "../style.module.scss";
import useAutosizeTextArea from "./useAutosizeTextarea";

type props = {
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  boxClassName?: string;
  // children?: string;
  name?: string;
  id?: string;
  label?: string;
  error?: string | undefined;
  isTouched?: boolean;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export default function InputAutoHeight({
  defaultValue = "",
  placeholder,
  className,
  boxClassName = "",
  // children,
  name,
  id,
  error = "",
  isTouched,
  label,
  required,
  onChange,
  onBlur,
}: props) {
  const defaultId = useId();
  const inputId = useMemo(() => id || defaultId, [defaultId, id]);

  const [value, setValue] = useState(defaultValue);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
    onChange?.(evt);
  };

  return (
    <label onClick={focus} className={`${css.input} ${boxClassName}`}>
      {label && <span className={css.label}>{label}</span>}
      <textarea
        id={inputId}
        name={name}
        onBlur={onBlur}
        onChange={handleChange}
        placeholder={placeholder}
        ref={textAreaRef}
        rows={1}
        value={value}
        className={`${className}`}
        required={required}
      />
      {isTouched && error && <span className={`error ${css.error}`}>{error}</span>}
    </label>
  );
}
