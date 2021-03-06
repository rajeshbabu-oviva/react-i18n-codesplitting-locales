import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/**
 * Without code-splitting the following imports will be bundled as part of the main.js file.
    import en from './locales/en.json';
    import fr from './locales/fr.json';
    import ja from './locales/ja.json';
 */

const LANG_KEY: string = new URLSearchParams(window?.location?.search).get('language') || 'en';

export const init = async () => {
  const resources = await import(`./locales/${LANG_KEY}.json`);

  i18n.use(initReactI18next).init({
    resources: { [LANG_KEY]: resources.default },
    lng: LANG_KEY,
  });
};

export default i18n;
