import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';

const resources = {
  es: { translation: es },
  en: { translation: en },
};

// Obtener idioma guardado en localStorage o usar español por defecto
const getSavedLanguage = () => {
  try {
    const saved = localStorage.getItem('i18nextLng');
    if (saved === 'en') return 'en';
    return 'es';
  } catch {
    return 'es';
  }
};

i18next.use(initReactI18next).init({
  resources,
  lng: getSavedLanguage(),
  fallbackLng: 'es',
  ns: ['translation'],
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['localStorage'],
    caches: ['localStorage'],
  },
});

export default i18next;
