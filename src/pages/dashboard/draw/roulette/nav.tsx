import { BackIcon } from "@/assets/icons";
import { ROULETTE_ROUTE } from "@/helpers/routes";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { NavLink, useNavigate } from "react-router-dom";
import { Popover } from "antd";
import moment from "moment";
import CheckRole from "@/components/etc/CheckRoles";
import { logout } from "@/redux/features/slices/user";

export default function Nav({ start }: { start: boolean }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { grouped } = useAppSelector((s) => s.draw);

  return (
    <nav
      className="
      absolute grid gap-2 uppercase inset-16 mr-auto my-auto h-fit w-fit text-white
      [&>*]:flex [&>*]:gap-3 [&>*]:items-center [&>*]:border-opacity-5 [&>*]:bg-opacity-20"
    >
      {Object.keys(grouped)?.map((g) => {
        if (grouped?.[g]?.length > 1)
          return (
            <Popover
              key={g}
              placement="right"
              overlayClassName="max-h-[90dvh] overflow-auto bg-grey bg-opacity-30 rounded-lg backdrop-blur-md border-2 border-solid border-opacity-10 border-gray-50 border-l-white"
              overlayInnerStyle={{ padding: 0, background: "transparent", overflow: "auto" }}
              content={
                <>
                  {grouped?.[g]?.map((o: any) => (
                    <NavLink
                      key={o?.id}
                      onClick={(e) => (start || o?.isPlayed) && e.preventDefault()}
                      to={`${ROULETTE_ROUTE}/${o?.id}?q=${o?.product?.name}&img=${o?.product?.picture}&s=${o?.startDate}&e=${o?.endDate}`}
                      replace
                      className={({ isActive }) =>
                        `${
                          o?.isPlayed
                            ? "text-dark-grey"
                            : isActive
                              ? "!text-orange-500 bg-black bg-opacity-20"
                              : "text-light-grey hover:bg-black hover:bg-opacity-20 hover:text-white"
                        } flex p-4 py-2`
                      }
                    >
                      {moment(o?.startDate).format("MMM-DD")} -{" "}
                      {moment(o?.endDate).format("MMM-DD")}
                    </NavLink>
                  ))}
                </>
              }
            >
              <div
                className={`border-gray-50 text-light-grey !bg-secondary !bg-opacity-5 backdrop-blur p-1 border-2 border-solid justify-center rounded-md cursor-pointer`}
              >
                productName
                <img
                  src={grouped?.[g]?.[0]?.product?.productPicture}
                  title={grouped?.[g]?.[0]?.product?.productName}
                  className="size-12 object-contain"
                />
              </div>
            </Popover>
          );
        return (
          <NavLink
            key={g}
            onClick={(e) => (start || grouped?.[g]?.[0]?.isPlayed) && e.preventDefault()}
            to={`${ROULETTE_ROUTE}/${grouped?.[g]?.[0]?.drawId}?q=${grouped?.[g]?.[0]?.product?.productName}&img=${grouped?.[g]?.[0]?.product?.productPicture}&s=${grouped?.[g]?.[0]?.startDate}&e=${grouped?.[g]?.[0]?.endDate}`}
            replace
            className={({ isActive }) =>
              `${
                grouped?.[g]?.[0]?.isPlayed
                  ? "text-grey border-gray-50"
                  : isActive
                    ? "text-orange-500 bg-orange-300 border-orange-500"
                    : "bg-white border-gray-50"
              } p-1 justify-center border-2 border-solid rounded-md`
            }
          >
            <img src={grouped?.[g]?.[0]?.product?.picture} className="size-12 object-contain" />
          </NavLink>
        );
      })}

      <CheckRole
        permission={"view_dashboard"}
        fallback={
          <div
            onClick={() => {
              dispatch(logout());
            }}
            className={`bg-white border-gray-50 p-4 border-2 border-solid rounded-md cursor-pointer`}
          >
            <BackIcon className="w-6 text-light-grey" /> <p className="hidden">ndinga</p>
          </div>
        }
      >
        <div
          onClick={() => {
            navigate(-1);
          }}
          className={`bg-white border-gray-50 p-4 border-2 border-solid rounded-md cursor-pointer`}
        >
          <BackIcon className="w-6 text-light-grey" /> <p className="hidden">ndinga</p>
        </div>
      </CheckRole>
    </nav>
  );
}
