import SelectRadio from "@/components/etc/selectRadio";
import { maxDate, minDate } from "@/helpers/etc";
import { useAppSelector } from "@/redux/hook";
import Button from "@components/button";
import { Input } from "@components/form";
import { asideProps } from "@components/table";
import { IconCircle } from "@tabler/icons-react";
import { Popover } from "antd";
import { Formik, FormikHelpers, FormikValues } from "formik";
import moment from "moment";
import { useCallback, useState } from "react";
import { DateRangePicker, Range } from "react-date-range";

export default function Filters({ onFilter }: asideProps<any>) {
  const [radioId, setRadioId] = useState<string | null>(null);
  const { user } = useAppSelector((s) => s.user);
  const [state, setState] = useState<Range[]>([
    {
      startDate: minDate,
      endDate: maxDate,
      key: "selection",
    },
  ]);

  const submit = useCallback<any>(
    async (values: FormikValues, { setSubmitting }: FormikHelpers<FormikValues>) => {
      onFilter?.({ ...values, radioId });
      setSubmitting(false);
    },
    [onFilter, radioId],
  );

  return (
    <Formik
      initialValues={{
        from: moment(minDate).format("YYYY-MM-DD"),
        to: moment(maxDate).format("YYYY-MM-DD"),
        submit: null,
      }}
      onSubmit={submit}
    >
      {({ values, resetForm, isSubmitting, handleSubmit, handleChange, setValues }) => (
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
          {user?.attributes?.radioId?.length != 1 && (
            <SelectRadio radioId={radioId} setRadioId={setRadioId} className="!col-span-1" />
          )}
          <div className="flex justify-end pt-2 gap-2">
            <Button
              onClick={() => resetForm()}
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
