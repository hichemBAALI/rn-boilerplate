import {I18nManager, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    right: -35,
    top: -5,
    width: 30,
    height: 30,
    elevation: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  diagonalRectangle: {
    position: 'absolute',
    width: 100,
    height: 15,
    transform: I18nManager.isRTL ? [{rotate: '-45deg'}] : [{rotate: '45deg'}],
    borderStyle: 'solid',
  },
});
