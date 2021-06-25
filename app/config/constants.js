import {locale} from '../utils/localization/localization';
import images from './images';
// OS PLATFROMS
export const ANDROID = 'android';
export const IOS = 'ios';

export const IS_MOBILE_PLATFORM = 'mobile';

export const UNEXPECTED_ERROR = {
  en: 'Something wrong happened, please try later',
  fr: 'Un problème est survenu, veuillez réessayer plus tard',
  ar: 'حدث خطأ ما ، يرجى المحاولة لاحقًا',
};

// Action Const
export const DESTROY_SESSION = 'DESTROY_SESSION';
export const IS_SPLASH_LOADING = 'IS_SPLASH_LOADING';
export const GET_LANGUAGES = 'GET_LANGUAGES';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

// Screens Stack
export const SPLASH_STACK = 'SplashStack';
export const LOGIN_STACK = 'LoginStack';
export const HOME_STACK = 'HomeStack';
export const SCAN_STACK = 'ScanStack';
export const SETTINGS_STACK = 'SettingsStack';
export const BOTTOM_NAV_STACK = 'BottomNavStack';
export const BOTTOM_NAV_ITEMS_NUMBER = 3;

// Screens Name
export const SPLASH_SCREEN = 'SplashScreen';
export const LOGIN_SCREEN = 'LoginScreen';
export const HOME_SCREEN = 'HomeScreen';
export const SCAN_SCREEN = 'ScanScreen';
export const SETTINGS_SCREEN = 'SettingsScreen';

// Screens Params
export const PARAMS = 'params';
// Timeout
export const CONNEXION_TIME_OUT_MESSAGE = 'Network Time out';

export const NOP = 'NOP';

// Button types
export const IS_VALIDATE_FILL_TYPE = 'IS_VALIDATE_FILL_TYPE';
export const IS_VALIDATE_LINE_TYPE = 'IS_VALIDATE_LINE_TYPE';
export const IS_CANCEL_FILL_TYPE = 'IS_CANCEL_FILL_TYPE';
export const IS_CANCEL_LINE_TYPE = 'IS_CANCEL_LINE_TYPE';
export const IS_DISABLED_TYPE = 'IS_DISABLED';
export const IS_SKIP_TYPE = 'IS_SKIP_TYPE';

// InputText status
export const IS_FOCUS = 'IS_FOCUS';
export const IS_SUCCESS = 'IS_SUCCESS';
export const IS_ERROR = 'IS_ERROR';
export const IS_EDITABLE = 'IS_EDITABLE';
export const IS_BLUR = 'IS_BLUR';
export const IS_GRAYED_OUT = 'IS_GRAYED_OUT';
// Flsh message types
export const IS_SUCCESS_MESSAGE = 'success';
export const IS_ERROR_MESSAGE = 'danger';
export const IS_WARNING_MESSAGE = 'warning';
export const IS_INFO_MESSAGE = 'info';

// API RESPONSE STATUS
export const STATUS_CREATED = 201;
export const STATUS_OK = 200;
export const STATUS_NAUTHORIZED = 401;
export const STATUS_BAD_REQUEST = 400;
export const STATUS_NOT_FOUND = 404;
export const STATUS_SERVER_ERROR = 500;

export const FONT_WEIGHT = {
  BOLD: 'bold',
  MEDIUM: 'medium',
  REGULAR: 'regular',
  LIGHT: 'light',
};

export const TEXT_ALIGN = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
};

export const THUMBNAIL_IMAGE = images.SPLASH_LOGO;
export const DEFAULT = 'default';
export const UNDEFINED = 'UNDEFINED';
