import { Popover } from "antd";
import { DateRangePicker, Range } from "react-date-range";
import Button from "../button";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useCallback, useLayoutEffect, useState } from "react";
import { ReportThunk } from "@/redux/features/actions/reports";
import { IconCircle } from "@tabler/icons-react";
import { maxDate, minDate } from "@/helpers/etc";

export default function DashboardTop() {
  const { fetchTimes, range, status } = useAppSelector((s) => s.reports);
  const { user } = useAppSelector((s) => s.user);
  const dispatch = useAppDispatch();
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(moment(range.from).format("llll")),
      endDate: new Date(moment(range.to).format("llll")),
      key: "selection",
    },
  ]);

  const getData = useCallback(
    (fromDate: string, toDate: string) => {
      const filters: any = { fromDate, toDate };

      if (user?.attributes?.radioId?.length == 1)
        filters.radioId = user?.attributes?.radioId?.[0] || filters?.radioId;

      dispatch(ReportThunk(filters));
    },
    [dispatch, user?.attributes?.radioId],
  );

  useLayoutEffect(() => {
    if (fetchTimes <= 0) getData(range.from, range.to);
  }, [fetchTimes, getData, range.from, range.to]);

  return (
    <div className="flex gap-4 items-center">
      {/* <small>Data refreshed at Feb 11,2024 07:14 PM</small> */}
      <Popover
        mouseEnterDelay={0.5}
        mouseLeaveDelay={0.5}
        content={
          <div>
            <DateRangePicker
              onChange={({ selection }) => {
                setState([selection]);
              }}
              // showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={1}
              ranges={state}
              direction="horizontal"
              preventSnapRefocus={true}
              calendarFocus="backwards"
              rangeColors={["var(--primary-color)"]}
              dragSelectionEnabled
              maxDate={maxDate}
              minDate={minDate}
            />
            <div className="flex justify-end pt-2 gap-2">
              <Button
                outlined
                disabled={status == "pending"}
                size="xsm"
                className="!rounded-full"
                onClick={() =>
                  setState([
                    {
                      startDate: new Date(range.from),
                      endDate: new Date(range.to),
                      key: "selection",
                    },
                  ])
                }
              >
                Reset
              </Button>
              <Button
                disabled={status == "pending"}
                size="xsm"
                className="!rounded-full"
                icon={status == "pending" && <IconCircle size={16} />}
                onClick={() => getData(`${state[0].startDate}`, `${state[0].endDate}`)}
              >
                Filter
              </Button>
            </div>
          </div>
        }
      >
        <div className="cursor-pointer text-sm text-grey">
          {/* <p className="mb-1 text-grey">Select Date Range</p> */}
          <span className="flex gap-2 items-center [&>*]:p-1 [&>*]:px-3 [&>*]:bg-light-grey [&>*]:bg-opacity-30 [&>*]:rounded-md">
            <span>{moment(state[0].startDate).format("ll")}</span>-
            <span>{moment(state[0].endDate).format("ll")}</span>
          </span>
        </div>
      </Popover>
    </div>
  );
}
