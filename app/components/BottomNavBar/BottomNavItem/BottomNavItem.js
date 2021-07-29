import React from 'react'
import { View } from 'react-native'
import colors from '../../../config/colors'
import RemixIcon from '../../../utils/icon/RemixIcons'
import styles from './styles'
import CustomText from '../../CustomText'
import { FONT_WEIGHT } from '../../../config/constants'

const BottomNavItem = (props) => {
  const { isFocused, tabBarIcon, tabBarLabel, isLabelShown } = props
  return (
    <View style={styles.itemContainer}>
      <RemixIcon
        style={styles.icon}
        size={24}
        color={isFocused ? colors.white : colors.grey_400}
        name={tabBarIcon}
      />
      {isFocused && isLabelShown ? (
        <CustomText
          style={styles.label}
          content={tabBarLabel}
          color={colors.white}
          weight={FONT_WEIGHT.MEDIUM}
          size={14}
        />
      ) : null}
    </View>
  )
}

export default BottomNavItem
