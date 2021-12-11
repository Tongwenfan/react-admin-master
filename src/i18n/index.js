import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en_US from './en-US'
import zh_CN from './zh-CN'
import zh_TW from './zh-TW'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': { translation: en_US },
      'zh-CN': { translation: zh_CN },

      'zh-TW': { translation: zh_TW }
    },
    fallbackLng: navigator.language || "en-US",
    debug: true,

    // ns: ["translations"],
    // defaultNS: "translations",

    // keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
