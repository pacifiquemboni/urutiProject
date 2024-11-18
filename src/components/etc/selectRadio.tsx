import React from "react";
import SearchAsyncSelect from "../form/select/searchSelect";
import { axios } from "@/redux/axios";

const filterRadios = async (inputValue: string) => {
  try {
    const res = await axios.get(`/v1/category?search=${inputValue}`, {
      params: { pageSize: 8, pageNumber: 1 },
    });

    return [{ id: null, name: "Select Radio" }, ...(res?.data?.list || [])]?.map?.((one: any) => ({
      value: one?.id,
      label: one?.name,
    }));
  } catch (error) {
    return [];
  }
};

export default function SelectRadio({
  radioId,
  setRadioId,
  className = "",
}: {
  radioId: string | null;
  setRadioId: React.Dispatch<React.SetStateAction<string | null>>;
  className?: string;
}) {
  return (
    <label
      htmlFor="radioId"
      className={`sm:col-span-2 ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <span className="text-neutral-700 mb-2 inline-block">Select Radio</span>
      <SearchAsyncSelect
        id="radioId"
        name="radioId"
        className="bg-neutral-200"
        styles={{
          control: (base) => ({
            ...base,
            border: "none",
            boxShadow: "none",
            background: "transparent",
            borderRadius: ".2rem",
          }),
          valueContainer: (base) => ({ ...base, paddingInline: "1rem" }),
        }}
        filterFn={filterRadios}
        onChange={(value: any) => setRadioId(value?.value)}
        defaultInputValue={radioId || ""}
      />
    </label>
  );
}
