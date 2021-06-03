import I18n from 'react-native-i18n';
import numeral from 'numeral';
import en from './en.json';
import fr from './fr.json';
import ar from './ar.json';

I18n.fallbacks = true;
I18n.translations = { en, fr, ar };

const locale = (word, value) => (value ? I18n.t(word, { value }) : I18n.t(word));

const currentLocal = () => {
  const localCode = I18n.currentLocale()
    .split('-')
    .shift();
  if (localCode in I18n.translations) {
    return localCode;
  }
  return 'en';
};

const updateCurrentLocale = (lang) => {
  if (!lang) {
    return;
  }
  I18n.locale = lang;
};

numeral.register('locale', 'fr', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal(number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: '',
  },
});

numeral.register('locale', 'ar', {
  delimiters: {
    thousands: '.',
    decimal: '.',
  },
  abbreviations: {
    thousand: 'ألف',
    million: 'مليون',
    billion: 'بليون',
    trillion: 'ترليون',
  },
  // eslint-disable-next-line no-unused-vars
  ordinal(number) {
    return '';
  },
  currency: {
    symbol: '',
  },
});

numeral.locale('fr');

export {
  locale, currentLocal, updateCurrentLocale,
};
