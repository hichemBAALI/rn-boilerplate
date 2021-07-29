import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import CustomText from '../CustomText'
import { FONT_WEIGHT, TEXT_ALIGN } from '../../config/constants'
import colors from '../../config/colors'

const VersionTag = (props) => {
  const { versionTagText, backgroundColor } = props
  return (
    <View>
      {versionTagText === '' ? null : (
        <View style={styles.container}>
          <CustomText
            style={[styles.diagonalRectangle, { backgroundColor }]}
            content={versionTagText}
            size={12}
            color={colors.white}
            weight={FONT_WEIGHT.BOLD}
            textAlign={TEXT_ALIGN.CENTER}
          />
        </View>
      )}
    </View>
  )
}
export default VersionTag
