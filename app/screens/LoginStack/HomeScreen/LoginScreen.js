import React, { useState } from 'react'
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
} from 'react-native'
import {
  BOTTOM_NAV_STACK,
  FONT_WEIGHT,
  IS_BLUR,
  IS_FOCUS,
  TEXT_ALIGN,
} from '../../../config/constants'
import colors from '../../../config/colors'
import styles from './styles'
import CustomText from '../../../components/CustomText'
import Button from '../../../components/Button'
import CustomTextInput from '../../../components/CustomTextInput'
import RemixIcon from '../../../utils/icon/RemixIcons'
import { locale } from '../../../utils/localization/localization'
import images from '../../../config/images'

const LoginScreen = (props) => {
  const [screenName] = useState(props.route.name)
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [username, setUsername] = useState()
  const [usernameStatus, setUsernameStatus] = useState()
  const [password, setPassword] = useState()
  const [passwordStatus, setPasswordStatus] = useState()

  const handleLogin = () => {
    props.navigation.navigate(BOTTOM_NAV_STACK)
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomText
        content={`LoginStack - ${screenName}`}
        size={18}
        textAlign={TEXT_ALIGN.CENTER}
        weight={FONT_WEIGHT.REGULAR}
        color={colors.grey_300}
        style={{ padding: 16 }}
      />
      <Image source={images.SPLASH_LOGO} style={styles.imageStyle} />
      <CustomTextInput
        onChangeText={(text) => setUsername(text)}
        holderIconName="user-3-line"
        status={usernameStatus}
        value={username}
        onFocus={() => setUsernameStatus(IS_FOCUS)}
        onBlur={() => setUsernameStatus(IS_BLUR)}
        placeholder={locale('Username')}
      />
      <CustomTextInput
        onChangeText={(text) => setPassword(text)}
        holderIconName="lock-2-line"
        status={passwordStatus}
        value={password}
        onFocus={() => setPasswordStatus(IS_FOCUS)}
        onBlur={() => setPasswordStatus(IS_BLUR)}
        secureTextEntry={secureTextEntry}
        placeholder={locale('Password')}
        sideComponent={
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          >
            <RemixIcon
              name={secureTextEntry ? 'eye-line' : 'eye-off-line'}
              size={18}
              color={colors.grey_550}
            />
          </TouchableOpacity>
        }
      />
      <View style={{ flexDirection: 'row' }}>
        <CustomText
          content={locale('Forget Password')}
          size={12}
          textAlign={TEXT_ALIGN.RIGHT}
          weight={FONT_WEIGHT.BOLD}
          color={colors.grey_300}
          style={styles.forgetPasswordStyle}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={handleLogin}
          text={locale('Login')}
          textSize={18}
          style={{ flex: 1, margin: 8 }}
        />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
