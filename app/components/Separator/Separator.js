import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import colors from '../../config/colors'
import styles from './styles'

const Separator = (props) => {
  const { isVertical, size, color, style } = props
  return (
    <View
      style={[
        styles.SeparatorStyle,
        style,
        {
          height: isVertical ? size : 1,
          width: isVertical ? 1 : size,
          backgroundColor: color,
        },
      ]}
    />
  )
}

Separator.propTypes = {
  isVertical: PropTypes.bool,
  size: PropTypes.any,
  color: PropTypes.string,
  style: PropTypes.shape(),
}

Separator.defaultProps = {
  isVertical: false,
  size: undefined,
  color: colors.blue_900,
  style: {},
}
export default Separator
