import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(HttpBackend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "de",
        supportedLngs: ["en", "de"],
        lng: "de",
        debug: false,
        react: {
            useSuspense: true,
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        }
    });

export default i18n;
