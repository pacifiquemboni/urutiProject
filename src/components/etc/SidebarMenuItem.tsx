import { Popover } from "antd";
import { useMemo } from "react";
import { NavLink as Link, NavLink } from "react-router-dom";
import CheckRole from "./CheckRoles";

const SidebarMenuItem = ({
  item: { end, url, icon: Icon, title, items, onClick },
}: {
  item: SideBarITem;
}) => {
  const child = useMemo(
    () => (
      <div className={`flex gap-1 relative`}>
        <Link
          end={end}
          onClick={onClick}
          to={url || "#"}
          className={({ isActive }) =>
            `parent flex w-full px-4 flex-col items-center gap-1 py-2 
          ${
            url && isActive
              ? "text-primary bg-gradient-to-r from-transparent to-primary/10 bg-opacity-50"
              : "hover:text-foreground hover:bg-opacity-10 hover:bg-primary"
          } 
          transition-all duration-300 rounded-md text-[#8e9094]`
          }
        >
          {({ isActive }) => (
            <>
              {Icon && <Icon size={30} />}
              <span className="text-xs">{title}</span>
              {isActive && (
                <div className="w-1 bg-primary rounded-full my-1 absolute right-0 bottom-0 top-0"></div>
              )}
            </>
          )}
        </Link>
      </div>
    ),
    [Icon, end, onClick, title, url],
  );

  if (items) {
    return (
      <Popover
        placement="right"
        content={
          <div className="flex flex-col">
            {items.map((subitem, index) => (
              <CheckRole permission={subitem.protected} key={index}>
                <NavLink
                  to={`${subitem.url}`}
                  end={subitem?.end}
                  className={({ isActive }) =>
                    `flex w-full px-4 items-center gap-2 py-2 ${
                      isActive
                        ? "text-primary hover:text-primary"
                        : "hover:text-foreground text-grey "
                    }`
                  }
                >
                  {subitem.icon && <subitem.icon className="size-6" />}
                  <span>{subitem.title}</span>
                </NavLink>
              </CheckRole>
            ))}
          </div>
        }
        color="white"
      >
        {child}
      </Popover>
    );
  }

  return child;
};

export default SidebarMenuItem;
