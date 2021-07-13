import React, { Component } from 'react'
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

class Button extends Component {
  render() {
    const {
      holderIconName,
      holderIconColor,
      type,
      onPress,
      width,
      style,
      text,
      textSize,
      textColor,
      textStyle,
    } = this.props
    switch (type) {
      case IS_VALIDATE_FILL_TYPE:
        this.typeStyle = styles.actionFillContainerStyle
        this.textStyle = colors.white
        break
      case IS_VALIDATE_LINE_TYPE:
        this.typeStyle = styles.actionLineContainerStyle
        this.textStyle = colors.red_400
        break
      case IS_CANCEL_FILL_TYPE:
        this.typeStyle = styles.cancelFillContainerStyle
        this.textStyle = colors.white
        break
      case IS_CANCEL_LINE_TYPE:
        this.typeStyle = styles.cancelLineContainerStyle
        this.textStyle = colors.yellow_800
        break
      case IS_DISABLED_TYPE:
        this.typeStyle = styles.disableContainerStyle
        this.textStyle = colors.grey_550
        break
      case IS_SKIP_TYPE:
        this.typeStyle = styles.skipContainerStyle
        this.textStyle = colors.grey_300
        break
      default:
        this.typeStyle = styles.actionContainerStyle
        this.textStyle = colors.white
        break
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={type === IS_DISABLED_TYPE}
        style={[
          styles.buttonContainer,
          this.typeStyle,
          { width },
          style,
        ]}
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
          color={textColor || this.textStyle}
        />
      </TouchableOpacity>
    )
  }
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
