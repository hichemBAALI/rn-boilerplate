import React, { Component } from 'react'
import {
  View,
  Dimensions,
  TouchableOpacity,
  I18nManager,
} from 'react-native'
import { connect } from 'react-redux'
import { PropsType } from 'react-native/ReactCommon/hermes/inspector/tools/msggen/src/Type'
import styles from './styles'
import colors from '../../config/colors'
import { FONT_WEIGHT } from '../../config/constants'
import CustomText from '../CustomText'

class NavTab extends Component {
  constructor() {
    super()
    this.screenWidth = Dimensions.get('window').width
    this.state = { activeSlide: 0 }
  }

  componentDidMount() {}

  carouselItem = (props, { item, index }) => (
    <View
      style={[
        styles.carouselItemStyle,
        {
          backgroundColor:
            index === this.state.activeSlide
              ? colors.primary
              : colors.white,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          this._carousel.snapToItem(
            I18nManager.isRTL
              ? this.props.data.length - 1 - index
              : index,
          )
          this.props.onItemPressed(item.id)
          this.setState({ activeSlide: index })
        }}
      >
        <CustomText
          content={item.title}
          color={
            index === this.state.activeSlide
              ? colors.white
              : colors.blue_300
          }
          size={12}
          weight={FONT_WEIGHT.BOLD}
        />
      </TouchableOpacity>
    </View>
  )

  render() {
    return this.props.isShown ? (
      <View style={styles.containerStyle} />
    ) : null
  }
}

const mapDispatchToProps = (dispatch) => ({})

const mapStateToProps = (state) => ({})

NavTab.Prototype = {
  data: PropsType.array,
  onItemPressed: PropsType.func,
  isShown: PropsType.bool,
}

NavTab.defaultProps = {
  data: [
    {
      title: 'All',
      id: 100,
    },
    {
      title: 'Banks',
      id: 200,
    },
    {
      title: 'Hospitals',
      id: 300,
    },
    {
      title: 'Posts',
      id: 400,
    },
  ],
  onItemPressed: () => {},
  isShown: false,
}
export default connect(mapStateToProps, mapDispatchToProps)(NavTab)
