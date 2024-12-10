// import { IconWorld } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Popover } from "react-tiny-popover";
import french from "../../assets/france.svg";
import english from "../../assets/english.svg";

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();

  // Load the saved language from localStorage or default to i18n's current language
  const [selected, setSelected] = useState(() => localStorage.getItem("language") || i18n.language);

  // Update i18n language if saved language is different
  useEffect(() => {
    if (selected && selected !== i18n.language) {
      i18n.changeLanguage(selected);
    }
  }, [selected, i18n]);

  const languages = [
    { value: "fr", label: t("french") },
    { value: "en", label: t("english") },
  ];

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const changeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang); // Change language
      localStorage.setItem("language", lang); // Save selected language to localStorage
      setSelected(lang); // Update state
      setIsPopoverOpen(false); // Close popover
    },
    [i18n]
  );

  return (
    <div className="flex justify-center w-20 h-10 border border-[#4a5b68]">
      <Popover
        isOpen={isPopoverOpen}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={
          <div className="bg-white shadow-md rounded relative p-2 top-16 -right-12 z-[100]">
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
        <button onClick={() => setIsPopoverOpen(!isPopoverOpen)} className="flex flex-row items-center gap-2 text-white">
        {selected} <p>|</p>
          {selected === "fr" ? <img src={french} alt="" className="w-4 h-4"/> : <img src={english} alt="" className="w-4 h-4" />}
        </button>
      </Popover>
    </div>
  );
};

export default ChangeLanguage;
