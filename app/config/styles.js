import {StyleSheet, Platform, Dimensions, PixelRatio} from 'react-native';
import {currentLocal} from '../utils/localization/localization';
import colors from './colors';
import {ANDROID} from './constants';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const baseUnit = 15;
const widthRatio = PixelRatio.get() > 2 ? 1.5 : 1.3;

// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}

function create(styles: Object): {[name: string]: number} {
  const platformStyles = {};
  Object.keys(styles).forEach((name) => {
    let {ios, android, ...style} = {...styles[name]};
    if (ios && Platform.OS === 'ios') {
      style = {...style, ...ios};
    }
    if (android && Platform.OS === 'android') {
      style = {...style, ...android};
    }
    platformStyles[name] = style;
  });
  return StyleSheet.create(platformStyles);
}

const QStyles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  dotDefaultBackground: {backgroundColor: colors.controlColor},
  dotFirstBackground: {backgroundColor: colors.primaryColor},
  dot: {
    width: 10,
    height: 10,
    margin: 10,
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default {
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),
  PADDING_SMALL: em(0.5),
  // CARD
  CARD_WIDTH: x - em(1.25) * 2,
  CARD_HEIGHT: 65,
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),
  FONT_SIZE_BIG: em(1.5),
  FONT_SIZE_BIG_X2: em(1.75),
  FONT_SIZE_BIG_X3: em(2),
  FONT_SIZE_BIG_X4: em(2.25),
  WIDTH_RATION: widthRatio,
  UNIVERSAL_MARGIN: 5,
  UNIVERSAL_RADIUS: 2,
  BUTTON_HEIGHT: 54,
  ELEVATION: 2,

  EDGE_BOTTOM_PADDING: Platform.OS === 'android' ? 550 : 120,
  ACCEPTANCE_EDGE_BOTTOM_PADDING: Platform.OS === 'android' ? 800 : 120,
  EDGE_TOP_PADDING: Platform.OS === 'android' ? 550 : 120,
  ACCEPTANCE_EDGE_TOP_PADDING: Platform.OS === 'android' ? 100 : 120,
  IOS_STATUS_BAR_HEIGHT: 20, // needed only for ios

  NotificationStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: QStyles.FONT_MEDIUM,
    paddingTop: Platform.OS === 'android' ? 0 : this.IOS_STATUS_BAR_HEIGHT,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  bodyContainer: {
    flex: 1,
    paddingStart: 16,
    paddingEnd: 16,
    backgroundColor: colors.mainBackground,
  },
  searchBarEndContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
};
export {QStyles, create};
