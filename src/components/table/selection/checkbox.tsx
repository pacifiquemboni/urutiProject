import { forwardRef, useEffect, useRef } from "react";

const SelectionCheckbox = forwardRef(({ indeterminate, ...rest }: any, ref) => {
  const defaultRef = useRef();
  const resolvedRef: any = ref || defaultRef;

  useEffect(() => {
    if (resolvedRef?.current && resolvedRef?.current?.indeterminate)
      resolvedRef.current.indeterminate = indeterminate;
  }, [indeterminate, resolvedRef]);

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});

export default SelectionCheckbox;
