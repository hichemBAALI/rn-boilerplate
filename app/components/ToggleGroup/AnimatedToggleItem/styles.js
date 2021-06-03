import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    padding: 8,

  },
  toggleItemSurface: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: colors.blue_400,
    alignSelf: 'center',
    zIndex: -1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: this.opacity,
  },
});
