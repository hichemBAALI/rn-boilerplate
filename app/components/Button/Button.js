import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import {
  FONT_WEIGHT,
  IS_VALIDATE_FILL_TYPE,
  IS_CANCEL_FILL_TYPE,
  IS_DISABLED_TYPE,
  IS_SKIP_TYPE,
  IS_VALIDATE_LINE_TYPE,
  IS_CANCEL_LINE_TYPE,
  TEXT_ALIGN,
} from '../../config/constants'
import colors from '../../config/colors'
import CustomText from '../CustomText'
import RemixIcon from '../../utils/icon/RemixIcons'

const Button = (props) => {
  const [typeStyle, setTypeStyle] = useState()
  const [textColor, setTextColor] = useState(props.textColor)
  const {
    holderIconName,
    holderIconColor,
    type,
    onPress,
    width,
    style,
    text,
    textStyle,
    textSize,
  } = props
  useEffect(() => {
    switch (type) {
      case IS_VALIDATE_FILL_TYPE:
        setTypeStyle(styles.actionFillContainerStyle)
        setTextColor(colors.white)
        break
      case IS_VALIDATE_LINE_TYPE:
        setTypeStyle(styles.actionLineContainerStyle)
        setTextColor(colors.red_400)
        break
      case IS_CANCEL_FILL_TYPE:
        setTypeStyle(styles.cancelFillContainerStyle)
        setTextColor(colors.white)
        break
      case IS_CANCEL_LINE_TYPE:
        setTypeStyle(styles.cancelLineContainerStyle)
        setTextColor(colors.yellow_800)
        break
      case IS_DISABLED_TYPE:
        setTypeStyle(styles.disableContainerStyle)
        setTextColor(colors.grey_550)
        break
      case IS_SKIP_TYPE:
        setTypeStyle(styles.skipContainerStyle)
        setTextColor(colors.grey_300)
        break
      default:
        setTypeStyle(styles.actionContainerStyle)
        break
    }
  }, [])

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={type === IS_DISABLED_TYPE}
      style={[styles.buttonContainer, typeStyle, { width }, style]}
    >
      {holderIconName ? (
        <RemixIcon
          name={holderIconName}
          color={holderIconColor}
          size={24}
          style={{ alignItems: 'center' }}
        />
      ) : null}
      <CustomText
        style={[styles.buttonText, textStyle]}
        size={textSize}
        content={text}
        weight={FONT_WEIGHT.REGULAR}
        textAlign={TEXT_ALIGN.CENTER}
        color={textColor}
      />
    </TouchableOpacity>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  textSize: PropTypes.number,
  textColor: PropTypes.string,
  textStyle: PropTypes.string,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  width: PropTypes.number,
  style: PropTypes.shape(),
  holderIconName: PropTypes.string,
  holderIconColor: PropTypes.string,
}

Button.defaultProps = {
  text: 'Button',
  textSize: 14,
  type: IS_VALIDATE_FILL_TYPE,
  width: 120,
  style: {},
  holderIconName: undefined,
  holderIconColor: undefined,
}

export default Button
