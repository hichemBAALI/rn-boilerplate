import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
} from 'react-native'
import PropTypes from 'prop-types'
import colors from '../../config/colors'
import RemixIcon from '../../utils/icon/RemixIcons'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 8,
  },
  iconContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const TopBack = (props) => (
  <TouchableOpacity
    style={[styles.container, props.containerStyle]}
    onPress={props.onPress}
  >
    <View style={styles.iconContainer}>
      <RemixIcon
        name={props.name}
        size={props.size}
        color={props.color}
        style={{
          transform: [
            { rotateY: I18nManager.isRTL ? '180deg' : '0deg' },
          ],
        }}
      />
    </View>
  </TouchableOpacity>
)

TopBack.propTypes = {
  onPress: PropTypes.func.isRequired,
  containerStyle: PropTypes.shape(),
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
}

TopBack.defaultProps = {
  containerStyle: {},
  name: 'ic_arrowback',
  size: 24,
  color: colors.blackColor,
}

export default TopBack
