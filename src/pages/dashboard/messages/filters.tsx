import Button from "@/components/button";
import { Input } from "@/components/form";
import { asideProps } from "@/components/table";
import { maxDate, minDate } from "@/helpers/etc";
import { IconCircle } from "@tabler/icons-react";
import { Popover } from "antd";
import { Formik, FormikHelpers, FormikValues } from "formik";
import moment from "moment";
import { useCallback, useState } from "react";
import { DateRangePicker, Range } from "react-date-range";

export default function Filters({ onFilter }: asideProps<any>) {
  // const filters = useMemo(() => {
  //   const out: { [key: string]: ColumnType } = {};
  //   headerGroups.map((headerGroup: any) =>
  //     headerGroup.headers.forEach((c: any) => {
  //       if (!c?.canSearch) out[c?.id] = c;
  //     }),
  //   );
  //   return out;
  // }, [headerGroups]);

  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(new Date().getDate() + 7),
      key: "selection",
    },
  ]);

  const submit = useCallback<any>(
    async (values: FormikValues, { setSubmitting }: FormikHelpers<FormikValues>) => {
      onFilter?.(values);
      setSubmitting(false);
    },
    [onFilter],
  );

  return (
    <Formik
      initialValues={{
        from: moment(state[0].startDate).format("YYYY-MM-DD"),
        to: moment(state[0].endDate).format("YYYY-MM-DD"),
        search: "",
        submit: null,
      }}
      onSubmit={submit}
    >
      {({ values, isSubmitting, handleSubmit, handleChange, setValues }) => (
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <div className="hidden">
            <Input name="from" type="date" value={values?.from} onChange={handleChange} />
            <Input name="to" type="date" value={values?.to} onChange={handleChange} />
          </div>
          <Popover
            mouseEnterDelay={0.5}
            mouseLeaveDelay={0.5}
            content={
              <DateRangePicker
                onChange={({ selection }) => {
                  setState([selection]);
                  setValues((p) => ({
                    ...p,
                    from: moment(selection.startDate).format("YYYY-MM-DD"),
                    to: moment(selection.endDate).format("YYYY-MM-DD"),
                  }));
                }}
                // showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={state}
                direction="horizontal"
                preventSnapRefocus={true}
                calendarFocus="backwards"
                rangeColors={["var(--primary-color)"]}
                maxDate={maxDate}
                minDate={minDate}
              />
            }
          >
            <div className="cursor-pointer">
              <p className="mb-1 text-grey">Select Date Range</p>
              <span className="flex gap-2 items-center [&>*]:p-1 [&>*]:px-3 [&>*]:bg-light-grey [&>*]:bg-opacity-30 [&>*]:rounded-md">
                <span>{moment(state[0].startDate).format("LL")}</span>-
                <span>{moment(state[0].endDate).format("LL")}</span>
              </span>
            </div>
          </Popover>
          <Input
            name="search"
            label="Search"
            value={values?.search}
            onChange={handleChange}
            placeholder="Search"
          />
          <div className="flex justify-end pt-2 gap-2">
            <Button
              type="reset"
              outlined
              disabled={isSubmitting}
              size="xsm"
              className="!rounded-full"
            >
              Reset
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              size="xsm"
              className="!rounded-full"
              icon={isSubmitting && <IconCircle size={16} />}
            >
              Filter
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}
