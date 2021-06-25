import colors from '../config/colors';
import styles from '../config/styles';
import {isIphoneXFamilly} from '../utils/dimensions';

export default {
  onBoardingContainer: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    alignItems: 'stretch',
    paddingTop: isIphoneXFamilly() ? 16 : 0,
    paddingBottom: isIphoneXFamilly() ? 16 : 0,
  },
  onBoardingMain: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: styles.FONT_LIGHT,
    color: colors.primaryColor,
    marginBottom: 20,
  },
  bottomControlAlignment: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  onBoardingInfo: {
    textAlign: 'center',
    fontSize: 12,
    color: colors.infoText,
    marginTop: 32,
  },
  alignCenter: {
    alignItems: 'center',
  },
  marginTop20: {
    marginTop: 20,
  },
  textCenter: {
    textAlign: 'center',
  },
};
