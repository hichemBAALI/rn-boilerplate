import React from 'react'
import { View } from 'react-native'
import { locale } from '../../utils/localization/localization'
import styles from './styles'
import CustomText from '../CustomText'
import { FONT_WEIGHT } from '../../config/constants'
import colors from '../../config/colors'

const NoItem = (props) => {
  const { caption } = props
  return (
    <View style={styles.container}>
      <CustomText
        weight={FONT_WEIGHT.BOLD}
        size={18}
        color={colors.grey_200}
        content={caption || locale('no item')}
      />
    </View>
  )
}

export default NoItem
