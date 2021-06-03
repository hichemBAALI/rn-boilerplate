import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
    zIndex: 1000,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blackColor,
    opacity: 0.6,
  },
});
