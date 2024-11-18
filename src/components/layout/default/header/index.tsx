import Button from "@/components/button";
import Logo from "@/components/etc/Logo";
import { GetUserThunk } from "@/redux/features/actions/users/me";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import css from "./style.module.scss";
import { DASHBOARD_ROUTE } from "@/helpers/routes";
import { HashLink } from "react-router-hash-link";
import DropDown from "@/components/dropdown";
import { IconWorld } from "@tabler/icons-react";
import { Popover } from "antd";
import { useTranslation } from "react-i18next";
import CheckRole from "@/components/etc/CheckRoles";

const menuItems = [
  // {
  //   title: "Home",
  //   url: "#home",
  // },
  {
    title: "how",
    url: "#how",
  },
  {
    title: "prizes",
    url: "#prize",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

const languages = [
  { value: "fr", label: "French" },
  { value: "en", label: "English" },
];

function Translator() {
  const { i18n, t } = useTranslation();
  const selected = useMemo(() => i18n.language, [i18n.language]);

  const click = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
    },
    [i18n],
  );

  return (
    <Popover
      placement="bottom"
      // rootClassName="max-lg:hidden"
      overlayInnerStyle={{ padding: 0, contain: "paint" }}
      content={
        <div className="grid min-w-[15ch]">
          {languages?.map((lang) => (
            <p
              key={lang.value}
              onClick={() => click(lang.value)}
              className={`grid px-3 py-2 leading-tight ${selected == lang.value ? "!bg-dark-grey [&>*]:text-white" : ""} hover:bg-light-grey hover:bg-opacity-50`}
            >
              <b>{t(lang?.label)}</b>
              <span className="text-grey">{lang?.label}</span>
            </p>
          ))}
        </div>
      }
    >
      <span>
        <IconWorld className="text-white" />
      </span>
    </Popover>
  );
}

export default function Header() {
  const { user, access_token } = useAppSelector((s) => s.user);
  const dispatch = useAppDispatch();
  const [scrollTop, setScrollTop] = useState(0);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    if (!user && access_token) dispatch(GetUserThunk());
  }, [access_token, dispatch, user]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="top"
      className={`${css.header} full-width content-grid w-full text-white bg-[#FF9671] ${scrollTop >= 20 ? "bg-opacity-90" : ""} backdrop-blur-lg sticky z-10 top-0`}
    >
      <nav className="flex justify-between py-3 items-center w-full">
        <Logo />
        <ul className="lg:flex items-center gap-12 hidden capitalize">
          {menuItems.map((item) => (
            <HashLink key={item.url} to={`/${item.url}`}>
              {t(`head.${item.title}`)}
            </HashLink>
          ))}
          <Translator />
        </ul>

        {user && (
          <CheckRole permission={"view_dashboard"}>
            <div className="max-lg:hidden capitalize">
              <Link to={DASHBOARD_ROUTE}>
                <Button
                  className={`!px-8 !py-3 !rounded-xl hover:bg-background hover:text-black hover:shadow-lg`}
                >
                  Dashboard
                </Button>
              </Link>
            </div>
          </CheckRole>
        )}

        <div className="lg:hidden">
          <DropDown
            positions="bottom"
            container={
              <button className="hamburger [&>*]:bg-white lg:hidden focus:outline-none bg-transparent border-0 flex">
                <span className={`hamburger-top`}></span>
                <span className={`hamburger-middle`}></span>
                <span className={`hamburger-bottom`}></span>
              </button>
            }
            className="lg:hidden flex flex-col items-center gap-5 text-lg py-8 [&>*]:px-10 !bg-foreground !text-background shadow-slate-900 w-[90vw]"
          >
            {menuItems.map((item) => (
              <HashLink key={item.url} to={`/${item.url}`} className="font-normal">
                {t(`head.${item.title}`)}
              </HashLink>
            ))}
            <Translator />
            {user && (
              <CheckRole permission={"view_dashboard"}>
                <Link to={DASHBOARD_ROUTE}>
                  <Button
                    className={`!px-8 !py-3 !rounded-xl hover:bg-background hover:text-black hover:shadow-lg`}
                  >
                    Dashboard
                  </Button>
                </Link>
              </CheckRole>
            )}
          </DropDown>
        </div>
      </nav>
    </header>
  );
}
