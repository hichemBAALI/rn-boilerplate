import { Alert, BackHandler, Linking, Platform } from 'react-native'
import crashlytics from '@react-native-firebase/crashlytics'
import { currentLocal, locale } from './localization/localization'
import { ANDROID } from '../config/constants'

const fonts = () => ({
  FONT_REGULAR:
    currentLocal() === 'ar'
      ? Platform.OS === ANDROID
        ? 'NeoSansArabicRegular'
        : 'Neo Sans Arabic'
      : Platform.OS === ANDROID
      ? 'ProductSansRegular'
      : 'ProductSans-Regular',
  FONT_LIGHT:
    currentLocal() === 'ar'
      ? Platform.OS === ANDROID
        ? 'NeoSansArabicLight'
        : 'NeoSansArabic-Light'
      : Platform.OS === ANDROID
      ? 'ProductSansLight'
      : 'ProductSans-Light',
  FONT_THIN:
    currentLocal() === 'ar'
      ? Platform.OS === ANDROID
        ? 'NeoSansArabicLight'
        : 'NeoSansArabic-Light'
      : Platform.OS === ANDROID
      ? 'ProductSansLight'
      : 'ProductSans-Light',
  FONT_MEDIUM:
    currentLocal() === 'ar'
      ? Platform.OS === ANDROID
        ? 'NeoSansArabicRegular'
        : 'Neo Sans Arabic'
      : Platform.OS === ANDROID
      ? 'ProductSansMedium'
      : 'ProductSans-Medium',
  FONT_BOLD:
    currentLocal() === 'ar'
      ? Platform.OS === ANDROID
        ? 'NeoSansArabicBold'
        : 'NeoSansArabic-Bold'
      : Platform.OS === ANDROID
      ? 'ProductSansBold'
      : 'ProductSans-Bold',
})

const countryFromPhoneNumber = (phoneNumber) => {
  if (phoneNumber.startsWith('+213')) return 'Algeria'
  if (phoneNumber.startsWith('+33')) return 'France'
  if (phoneNumber.startsWith('+216')) return 'Tunisia'
  if (phoneNumber.startsWith('+212')) return 'Morocco'
  if (phoneNumber.startsWith('+966')) return 'Saudi Arabia'
  if (phoneNumber.startsWith('+90')) return 'Turkey'
  return 'Algeria'
}

const crashlyticsRecordError = (error, userId) => {
  crashlytics().log(error?.response)
  crashlytics().setUserId(userId)
  crashlytics().recordError(error)
}

const openUrl = (url) => {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url)
    } else {
      // TODO: we need to implement Error handler
      return Promise.reject(new Error('Could not open the url'))
    }
  })
}

const exitApp = () => {
  Alert.alert(
    locale('Exit App'),
    locale('Exiting the application'),
    [
      {
        text: locale('cancel'),
        style: 'cancel',
      },
      {
        text: locale('confirm'),
        onPress: () => BackHandler.exitApp(),
      },
    ],
    { cancelable: false },
  )
  return true
}

const exitAppWithoutConfirmation = () => {
  BackHandler.exitApp()
  return true
}

const Log = (message) => {
  if (__DEV__) {
    console.log(message)
  }
}

const parsBoolean = (value) => {
  if (value === false || value === undefined) return false
  return true
}
export {
  fonts,
  countryFromPhoneNumber,
  crashlyticsRecordError,
  Log,
  exitApp,
  exitAppWithoutConfirmation,
  parsBoolean,
}
