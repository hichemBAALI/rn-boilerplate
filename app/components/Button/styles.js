import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
import Style from '../../config/styles';

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    zIndex: 999,
    height: 48,
    borderRadius: 4,
    paddingStart: 16,
    paddingEnd: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  actionFillContainerStyle: {
    backgroundColor: colors.primary,
  },

  actionLineContainerStyle: {
    borderWidth: 2,
    borderColor: colors.primary,
  },

  cancelFillContainerStyle: {
    backgroundColor: colors.secondary,
  },

  cancelLineContainerStyle: {
    borderWidth: 2,
    borderColor: colors.secondary,
  },

  disableContainerStyle: {
    backgroundColor: colors.grey_100,
  },

  skipContainerStyle: {
    borderWidth: 2,
    borderColor: colors.grey_300,
  },
  buttonText: {
    flex: 1,
  },
});
