import { IconWorld } from "@tabler/icons-react";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Popover } from "react-tiny-popover";


const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();

  const selected = i18n.language;

  const languages = [
    { value: "fr", label: t("french") },
    { value: "en", label: t("english") },
  ];
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const changeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      setIsPopoverOpen(false);
    },
    [i18n],
  );
  return (
    <div className="">
      <Popover
            isOpen={isPopoverOpen}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={
              <div className="bg-white shadow-md rounded relative p-2 top-16 -right-8 ">
                {languages.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => changeLanguage(lang.value)}
                    className={`block w-full px-3 py-2 text-left ${
                      selected === lang.value ? "bg-gray-200 font-bold" : "hover:bg-gray-100"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            }
          >
            <button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
              <IconWorld className="text-white text-2xl" />
            </button>
          </Popover>

    </div>
  );
};

export default ChangeLanguage;
