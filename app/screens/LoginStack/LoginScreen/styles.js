import { StyleSheet } from 'react-native'
import Styles from '../../../config/styles'

export default StyleSheet.create({
  container: {
    ...Styles.bodyContainer,
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  forgetPasswordStyle: {
    flex: 1,
    alignItems: 'flex-end',
    padding: 16,
  },
})
