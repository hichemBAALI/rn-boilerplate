import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../config/colors'
import Style from '../../config/styles'

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    marginStart: 16,
    padding: 8,
  },
  carouselItemStyle: {
    height: 24,
    borderRadius: 32,
    width: 80,
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: colors.mainBackground,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainBackground,
  },
  slideStyle: {},
  title: {
    fontFamily: Style.FONT_BOLD,
    fontSize: 12,
  },
})
