import Button from "@components/button";
import exportFromJson from "export-from-json";
import { FormEvent, useCallback } from "react";
import css from "./style.module.scss";
import { Select } from "@/components/form";
import { ExportIcon } from "@/assets/icons";
import { Popover } from "antd";

type Types = "html" | "json" | "txt" | "csv" | "xls" | "xml" | "css";
type DataType = "filtered" | "allData" | "currentData";

export default function ExportData({
  filtered,
  allData,
  currentData,
  selectedData,
  allowSelection,
}: {
  filtered: any[];
  allData: any[];
  currentData: any[];
  allowSelection?: boolean;
  selectedData?: any[];
}) {
  const submit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const formProps = Object.fromEntries(formData);

      const data = { filtered, allData, currentData, selectedData }[formProps?.data as DataType];

      exportFromJson({
        data: data as any[],
        fileName: "Download",
        exportType: exportFromJson?.types[(formProps?.type || "xls") as Types],
      });
    },
    [filtered, allData, currentData, selectedData],
  );

  return (
    <>
      <div className={css.dropdown}>
        <Popover
          mouseLeaveDelay={1}
          placement="bottom"
          content={
            <form className={`${css.dropdown_content}`} onSubmit={submit}>
              <div>
                <div>
                  <h4>Select data</h4>
                  {allowSelection ? (
                    <Select
                      name="data"
                      options={[
                        { value: "allData", text: "All Data" },
                        { value: "filtered", text: "Filtered Data" },
                        { value: "currentData", text: "Current Page" },
                        { value: "selectedData", text: "Selected Data" },
                      ]}
                    />
                  ) : (
                    <Select
                      name="data"
                      options={[
                        { value: "allData", text: "All Data" },
                        { value: "filtered", text: "Filtered Data" },
                        { value: "currentData", text: "Current Page" },
                      ]}
                    />
                  )}
                </div>
                <div>
                  <h4>Select type</h4>
                  <Select
                    name="type"
                    options={["xls", "csv", "xml", "json", "txt", "html"].map((value) => ({
                      text: `Export ${value.toUpperCase()}`,
                      value,
                    }))}
                  />
                </div>
              </div>
              <Button icon={<ExportIcon />} type="submit">
                Export
              </Button>
            </form>
          }
          color="white"
        >
          <>
            <Button icon={<ExportIcon />} className={css.dropbtn}>
              export
            </Button>
          </>
        </Popover>
      </div>
    </>
  );
}
