import { StyleSheet } from 'react-native';
import Styles from '../../../config/styles';

export default StyleSheet.create({
  container: {
    ...Styles.bodyContainer,
    flex: 1,
    alignItems: 'center',
  },
  toggleItemStyle: {
    zIndex: -1,
    flex: 1,
    minWidth: 80,
    borderRadius: 16,
    padding: 8,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
  }
});
