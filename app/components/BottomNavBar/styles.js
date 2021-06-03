import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { BOTTOM_NAV_ITEMS_NUMBER } from '../../config/constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: 72,
    borderTopWidth: 1,
    elevation: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopColor: colors.white,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveTab: {
    flex: 1,
    width: width / BOTTOM_NAV_ITEMS_NUMBER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    flexDirection: 'row',
    width: width / BOTTOM_NAV_ITEMS_NUMBER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveTabInner: {
    width: width / BOTTOM_NAV_ITEMS_NUMBER,
    height: 40,
    borderRadius: 12,
  },
  activeTabInner: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.primary,
  },
});
