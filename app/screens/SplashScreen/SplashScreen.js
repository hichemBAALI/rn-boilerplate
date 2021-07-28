import React from 'react'
import { I18nManager, Image, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import RNRestart from 'react-native-restart'
import { bindActionCreators } from 'redux'
import images from '../../config/images'
import styles from './styles'
import { updateCurrentLocale } from '../../utils/localization/localization'
import {
  dispatchSetIsSplashLoading,
  dispatchChangeLanguage,
} from '../../state/actions'

const appDataLoaded = (actions) => {
  setTimeout(() => {
    actions.dispatchSetIsSplashLoading(false)
  }, 3000)
}

const SplashScreen = () => {
  const configuration = useSelector((state) => state.configuration)
  const dispatch = useDispatch()
  const actions = bindActionCreators(
    { dispatchSetIsSplashLoading, dispatchChangeLanguage },
    dispatch,
  )
  appDataLoaded(actions)
  const { lang } = configuration
  updateCurrentLocale(lang)
  if (
    (lang === 'ar' && !I18nManager.isRTL) ||
    (lang !== 'ar' && I18nManager.isRTL)
  ) {
    I18nManager.forceRTL(lang === 'ar')
    I18nManager.allowRTL(lang === 'ar')
    RNRestart.Restart()
    return <SafeAreaView />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.ImageLogoStyle}
        source={images.SPLASH_LOGO}
      />
    </SafeAreaView>
  )
}

export default SplashScreen
