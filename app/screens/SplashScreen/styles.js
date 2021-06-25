import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import Style from '../../shared/onBoardingStyle';

export default StyleSheet.create({
  ...Style,
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ImageLogoStyle: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 300,
    height: 150,
  },

  footerStyle: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerImage: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});
