import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput } from 'react-native'
import colors from '../../config/colors'
import styles from './styles'
import {
  IS_FOCUS,
  IS_SUCCESS,
  IS_ERROR,
  IS_BLUR,
  IS_GRAYED_OUT,
} from '../../config/constants'
import RemixIcon from '../../utils/icon/RemixIcons'

const CustomTextInput = (props) => {
  const [status, setStatus] = useState(props.status)
  const [advancedStyle, setAdvancedStyle] = useState(
    styles.containerStyle,
  )

  const {
    containerStyle,
    keyboardType,
    value,
    onSubmitEditing,
    placeholder,
    color,
    isEditable,
    holderIconName,
    onChangeText,
    secureTextEntry,
    sideComponent,
    onFocus,
    onBlur,
    maxLength,
    style,
  } = props

  useEffect(() => {
    switch (props.status) {
      case IS_FOCUS:
        setAdvancedStyle(styles.focusStyle)
        break
      case IS_BLUR:
        setAdvancedStyle(props.containerStyle)
        break
      case IS_ERROR:
        setAdvancedStyle(styles.errorStyle)
        break
      case IS_SUCCESS:
        setAdvancedStyle(styles.successStyle)
        break
      case IS_GRAYED_OUT:
        setAdvancedStyle(styles.grayedOutStyle)
        break
      default:
        setAdvancedStyle(props.containerStyle)
    }
  }, [props.status])

  return (
    <View style={[styles.container, advancedStyle, containerStyle]}>
      <TextInput
        style={[styles.defaultStyle, style]}
        keyboardType={keyboardType}
        underlineColorAndroid="transparent"
        value={value}
        onFocus={() => {
          setAdvancedStyle(styles.focusStyle)
          setStatus(IS_FOCUS)
          onFocus()
        }}
        onBlur={() => {
          setAdvancedStyle(styles.containerStyle)
          setStatus(IS_BLUR)
          onBlur()
        }}
        onChangeText={onChangeText}
        maxLength={maxLength}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor={colors.grey_550}
        color={status === IS_GRAYED_OUT ? colors.grey_550 : color}
        secureTextEntry={secureTextEntry}
        editable={isEditable}
      />
      {
        // action component for example
        sideComponent
      }
      {holderIconName ? (
        <View
          style={[
            styles.sideIcon,
            {
              backgroundColor:
                status === IS_FOCUS
                  ? colors.blue_400_alpha
                  : colors.grey_200,
            },
          ]}
        >
          <RemixIcon
            name={holderIconName}
            color={
              status === IS_FOCUS ? colors.blue_400 : colors.grey_300
            }
            size={16}
            style={{ alignItems: 'center' }}
          />
        </View>
      ) : null}
    </View>
  )
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  containerStyle: PropTypes.shape(),
  handleSideButton: PropTypes.func,
  holderIcon: PropTypes.string,
  holderIconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  isEditable: PropTypes.bool,
  status: PropTypes.string,
  sideComponent: PropTypes.func,
  color: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  maxLength: PropTypes.number,
}
TextInput.defaultProps = {
  onChangeText: () => {},
  onSubmitEditing: undefined,
  keyboardType: 'default',
  placeholder: 'Your place holder here',
  containerStyle: {},
  handleSideButton: () => {},
  holderIcon: undefined,
  holderIconColor: colors.blackColor,
  holderIconName: undefined,
  iconColor: colors.blackColor,
  isEditable: true,
  status: undefined,
  sideComponent: () => {},
  color: colors.blue_900,
  secureTextEntry: false,
}

export default CustomTextInput
