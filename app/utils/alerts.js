import { Alert } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import React from 'react';
import { currentLocal, locale } from './localization/localization';
import {
  CONNEXION_TIME_OUT_MESSAGE,
  IS_ERROR_MESSAGE,
  IS_INFO_MESSAGE,
  IS_SUCCESS_MESSAGE,
  IS_WARNING_MESSAGE, UNEXPECTED_ERROR,
} from '../config/constants';
import colors from '../config/colors';
import FlashMessageComponent from '../components/FlashMessageComponent';

const showFlashMessage = (message, type, duration = 3000, otherConfig) => {
  let iconName;
  let backgroundColor;
  switch (type) {
    case IS_SUCCESS_MESSAGE:
      iconName = 'checkbox-circle-line';
      backgroundColor = colors.green_300;
      break;
    case IS_WARNING_MESSAGE:
      iconName = 'error-warning-line';
      backgroundColor = colors.yellow_800;
      break;
    case IS_ERROR_MESSAGE:
      iconName = 'error-warning-line';
      backgroundColor = colors.red_400;
      break;
    case IS_INFO_MESSAGE:
      iconName = 'information-line';
      backgroundColor = colors.blue_400;
      break;
    default:
      iconName = 'information-line';
      backgroundColor = colors.blue_400;
      break;
  }
  showMessage({
    ...otherConfig,
    message: '',
    titleStyle: {
      width: 0,
      height: 0,
    },
    customMessage: message,
    type,
    duration,
    icon: iconName,
    style: {
      flex: 1,
      justifyContent: 'center',
      borderRadius: 12,
      backgroundColor,
      margin: 16,
    },
  });
};

const showResolveFlashMessage = (response, duration = 3000) => {
  showFlashMessage(
    locale('success'),
    response,
    duration,
    IS_SUCCESS_MESSAGE,
  );
};

const showRejectFlashMessage = (error, duration = 3000) => {
  showFlashMessage(
    locale('error'),
    error.response?.data?.message
      ? error.response.data.message
      : UNEXPECTED_ERROR[currentLocal()],
    duration,
    IS_ERROR_MESSAGE,
  );
};
export {
  showResolveFlashMessage,
  showRejectFlashMessage,
  showFlashMessage,
};
