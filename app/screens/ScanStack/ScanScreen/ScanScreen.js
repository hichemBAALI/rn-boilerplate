import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import {
  FONT_WEIGHT,
  SCAN_SCREEN,
  TEXT_ALIGN,
} from '../../../config/constants'
import colors from '../../../config/colors'
import styles from './styles'
import CustomText from '../../../components/CustomText'
import Button from '../../../components/Button'

const ScanScreen = (props) => {
  const [screenName] = useState(props.route.name)
  return (
    <SafeAreaView style={styles.container}>
      <CustomText
        content={`ScanStack - ${screenName}`}
        size={18}
        textAlign={TEXT_ALIGN.CENTER}
        weight={FONT_WEIGHT.REGULAR}
        color={colors.grey_300}
        style={{ padding: 16 }}
      />
      <Button
        onPress={() => props.navigation.navigate(`${SCAN_SCREEN}1`)}
        text="Next"
      />
    </SafeAreaView>
  )
}

export default ScanScreen
