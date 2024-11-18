import { forwardRef, useCallback, useRef } from "react";
import ReactSelect from "react-select";
import AsyncSelect from "react-select/async";

interface SearchAsyncSelectProps<T> extends React.ComponentPropsWithoutRef<typeof AsyncSelect> {
  filterFn: (inputValue: string) => Promise<T[]>;
}

export const SearchAsyncSelect = forwardRef<HTMLSelectElement, SearchAsyncSelectProps<any>>(
  <T,>({ filterFn, ...props }: SearchAsyncSelectProps<T>, ref: any) => {
    const promiseOptions = useCallback(
      (inputValue: string) => new Promise<T[]>((resolve) => resolve(filterFn?.(inputValue))),
      [filterFn],
    );

    const selectRef = useRef(ref as any);

    return (
      <AsyncSelect
        ref={selectRef}
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        {...props}
      />
    );
  },
);

export default SearchAsyncSelect;

interface SearchSelectProps extends React.ComponentPropsWithoutRef<typeof AsyncSelect> {
  label?: string;
}

export const SearchSelect = forwardRef<HTMLSelectElement, SearchSelectProps>(
  ({ label, required, ...props }: SearchSelectProps, ref: any) => {
    const selectRef = useRef(ref as any);

    return (
      <fieldset className="cursor-pointer pl-3 rounded-lg border border-blue-gray-200 -mt-2">
        {label && (
          <legend className="text-grey text-sm px-1 -ml-0.5">
            <small>{label}</small>
            {required && <span className="text-error"> *</span>}
          </legend>
        )}
        <ReactSelect
          ref={selectRef}
          className="!p-0 !border-0 -my-1 -mt-2"
          styles={{
            control: (base) => ({
              ...base,
              border: "none",
              boxShadow: "none",
              borderBottomRightRadius: "1rem",
              background: "transparent",
            }),
            valueContainer: (base) => ({ ...base, padding: 0 }),
          }}
          required={required}
          {...props}
        />
      </fieldset>
    );
  },
);
