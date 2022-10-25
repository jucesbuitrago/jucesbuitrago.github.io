import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import page_es from './locales/es_ES/Page.json';
import page_en from './locales/en_GB/Page.json';


const resources = {
    es: { Page: page_es },
    en: { Page: page_en },
}

i18n.use(initReactI18next)
    .init({
        lng: 'es',
        resources,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;