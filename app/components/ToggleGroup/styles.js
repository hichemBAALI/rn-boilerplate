import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  flatListContainer: {},
  container: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-start',
    alignContent: 'stretch',
  },
  toggleItemSurface: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 1000,
  },
})
