import {NativeModules, Platform} from 'react-native';
import {CHANGE_LANGUAGE, GET_LANGUAGES, IOS} from '../config/constants';

const getDefaultLocal = () => {
  const local =
    Platform.OS === IOS
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;

  const localCode = local.substring(0, 2);
  return localCode;
};
const defaultState = {
  lang: getDefaultLocal(),
  languages: [
    {
      code: 'ar',
      label: 'arabic',
    },
    {
      code: 'fr',
      label: 'french',
    },
    {
      code: 'en',
      label: 'english',
    },
  ],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.lang,
      };
    case GET_LANGUAGES:
      return {
        ...state,
        languages: action.languages,
      };
    default:
      return state;
  }
};
