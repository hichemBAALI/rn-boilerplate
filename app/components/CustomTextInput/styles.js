import { StyleSheet } from 'react-native'
// eslint-disable-next-line import/named
import colors from '../../config/colors'
import Style from '../../config/styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1.5,
    borderColor: colors.grey_550,
    backgroundColor: colors.white,
    margin: 8,
    borderRadius: 8,
    paddingStart: 8,
    paddingEnd: 8,
    justifyContent: 'space-between',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  focusStyle: {
    borderWidth: 2,
    borderColor: colors.blue_400,
  },
  errorStyle: {
    borderWidth: 2,
    borderColor: colors.red_400,
  },
  successStyle: {
    borderWidth: 2,
    borderColor: colors.green_300,
  },

  grayedOutStyle: {
    borderColor: colors.grey_100,
    backgroundColor: colors.grey_100,
  },
  defaultStyle: {
    paddingStart: 12,
    paddingEnd: 8,
    zIndex: 999,
    flex: 1,
    fontFamily: Style.FONT_REGULAR,
  },
  sideIcon: {
    width: 32,
    height: 32,
    alignItems: 'center',
    marginStart: 8,
    borderRadius: 8,
    justifyContent: 'center',
  },
})
