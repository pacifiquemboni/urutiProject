import { useCallback, useId, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import css from "../style.module.scss";

type childProps = {
  files: any[];
  error?: string;
  removeImage: (image: any) => void;
};

type props = {
  id?: string;
  className?: string;
  onChange?: (added: any[], data: any[]) => void;
  children?: (props: childProps) => JSX.Element | null | undefined;
  hoverDiv?: (() => JSX.Element | null | undefined) | any;
  hoverClassName?: string;
};
export default function ImageInputs({
  id,
  className,
  onChange,
  children,
  hoverDiv: HoverDiv,
  hoverClassName,
}: props) {
  const defaultId = useId();
  const inputId = useMemo(() => id || defaultId, [defaultId, id]);

  const [files, setFiles] = useState<any[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const accepted = useMemo(() => "image/png, image/gif, image/jpeg, image/webp".split(", "), []);

  const onDrop = useCallback(
    async (acceptedFiles: any[]) => {
      setError(() => undefined);
      let isAllAccepted = true;
      for (let i = 0; i < acceptedFiles.length; i++) {
        if (!accepted.includes(acceptedFiles[i]?.type)) {
          isAllAccepted = false;
          break;
        }
      }
      if (!isAllAccepted) return setError(() => `Accepted are ${accepted.join(", ")}`);

      await setFiles((prev) => {
        const allFiles = [...acceptedFiles, ...prev].filter(
          (element, index, array) =>
            array.findIndex((el) => element.name === el.name && element.size === el.size) === index,
        );
        onChange?.(acceptedFiles, allFiles);
        return allFiles;
      });
    },
    [accepted, onChange],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const clearFileInput = useCallback((ctrl: any) => {
    try {
      ctrl.value = null;
    } catch (ex) {
      /* empty */
    }
    if (ctrl.value) {
      ctrl.parentNode.replaceChild(ctrl.cloneNode(true), ctrl);
    }
  }, []);

  const removeImage = useCallback((image: any) => {
    setFiles((prev) => prev.filter((img) => img !== image));
  }, []);

  return (
    <label
      htmlFor={inputId}
      {...getRootProps()}
      onClick={(e) => e.stopPropagation()}
      className={`${css.uploader} ${className}`}
    >
      {children?.({ files, error, removeImage }) || (
        <>
          <p>
            <b>Drag here</b> your file or <b>Click here</b> to upload
          </p>
          {error && <p>{error}</p>}
        </>
      )}

      {isDragActive && (
        <p className={css.modal}>
          <b>Drop</b>&nbsp;the files&nbsp;<b>here</b> ...
        </p>
      )}

      <input
        type="file"
        multiple
        id={inputId}
        // accept={accepted.join(", ")}
        onChange={async (e) => {
          clearFileInput(e.target);
        }}
        {...getInputProps()}
      />
      {HoverDiv && (
        <div className={`${css.hover} ${hoverClassName}`}>
          {typeof HoverDiv == "function" ? (
            <HoverDiv />
          ) : (
            <p>
              <b>Drag here</b> your file or <b>Click here</b> to upload
            </p>
          )}
        </div>
      )}
    </label>
  );
}
