import { Fragment, useMemo } from "react";
import { Link } from "react-router-dom";

type props = {
  links: {
    label: string;
    to?: string;
  }[];
};
export default function Navigator({ links }: props) {
  const total = useMemo(() => links.length, [links.length]);

  return (
    <div className="flex h-full gap-2 font-medium text-grey pt-1 pb-3">
      {links?.map((link, index) =>
        index + 1 !== total ? (
          <Fragment key={`${link.label} ${link.to}`}>
            <Link to={link.to || "#"}>{link.label}</Link>
            <span>/</span>
          </Fragment>
        ) : (
          <Link className="text-primary" to={link.to || "#"} key={`${link.label} ${link.to}`}>
            {link.label}
          </Link>
        ),
      )}
    </div>
  );
}
