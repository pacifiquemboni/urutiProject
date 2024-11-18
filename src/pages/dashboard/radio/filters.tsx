import Button from "@/components/button";
import { Input, Select } from "@/components/form";
import { asideProps } from "@/components/table2/types";
import { maxDate, minDate } from "@/helpers/etc";
import { GetProductsThunk } from "@/redux/features/actions/products";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IconCircle } from "@tabler/icons-react";
import { Popover } from "antd";
import { Formik, FormikHelpers, FormikValues } from "formik";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { DateRangePicker, Range } from "react-date-range";

export default function Filters({ onFilter }: asideProps<any>) {
  const { list, fetchTimes } = useAppSelector((s) => s.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fetchTimes < 1) dispatch(GetProductsThunk({ pageSize: 1000 }));
  }, [dispatch, fetchTimes]);

  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(new Date().getDate() + 7),
      key: "selection",
    },
  ]);

  const submit = useCallback<any>(
    async (values: FormikValues, { setSubmitting }: FormikHelpers<FormikValues>) => {
      if (values?.to)
        values.to = moment(values.to)
          .add(moment(values.to).format("HH") == "23" ? 0 : 86369, "seconds")
          .format("YYYY-MM-DD HH:mm");
      onFilter?.(values);
      setSubmitting(false);
    },
    [onFilter],
  );

  return (
    <Formik
      initialValues={{
        search: "",
        from: "",
        to: "",
        radioId: "",
        submit: null,
      }}
      onSubmit={submit}
    >
      {({ values, isSubmitting, handleSubmit, handleChange, setValues }) => (
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <Input
            name="search"
            label="Search"
            onChange={handleChange}
            value={values?.search}
            placeholder="search"
          />
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
              <span className="flex gap-2 items-center [&>*]:text-center [&>*]:flex-grow [&>*]:p-1 [&>*]:px-3 [&>*]:bg-light-grey [&>*]:bg-opacity-30 [&>*]:rounded-md">
                <span>{values?.from ? moment(values?.from).format("LL") : "Not Selected"}</span>-
                <span>{values?.to ? moment(values?.to).format("LL") : "Not Selected"}</span>
              </span>
            </div>
          </Popover>
          <Select
            name="radioId"
            label="select Radio"
            value={values?.radioId}
            onChange={handleChange}
            placeholder="All Radios"
            options={list?.map?.((s) => ({ value: s?.id, text: s?.name }))}
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
