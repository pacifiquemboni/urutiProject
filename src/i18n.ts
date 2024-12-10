import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
const storedLanguage = localStorage.getItem("language") || "fr";
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
    },
    lng: storedLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
