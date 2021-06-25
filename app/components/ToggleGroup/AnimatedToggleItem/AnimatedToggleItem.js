import React, {Component} from 'react';
import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class AnimatedToggleItem extends Component {
  constructor() {
    super();
    this.state = {};
    this.animatedValue = new Animated.Value(0);
    this.width = 100;
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    this.props.isSelected
      ? this.handleAnimation()
      : (this.animatedValue = new Animated.Value(0));
  }

  handleAnimation = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.elastic(1.7),
    }).start();
  };

  render() {
    const {
      containerStyle,
      selectedItemStyle,
      innerComponent,
      isSelected,
      previousIndex,
      selectedIndex,
    } = this.props;
    return isSelected ? (
      <View style={[styles.container, containerStyle]}>
        {innerComponent}
        <Animated.View
          style={[
            styles.toggleItemSurface,
            {
              transform: [
                {
                  translateX: this.animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange:
                      previousIndex > selectedIndex ? [40, 0] : [-40, 0], // 0 : 150, 0.5 : 75, 1 : 0
                  }),
                },
                {
                  scaleX: this.animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            },
            selectedItemStyle,
          ]}
        />
      </View>
    ) : (
      <View style={[styles.container, containerStyle]}>{innerComponent}</View>
    );
  }
}

AnimatedToggleItem.propTypes = {
  containerStyle: PropTypes.any,
  selectedItemStyle: PropTypes.any,
  innerComponent: PropTypes.any,
  isSelected: PropTypes.bool,
};

AnimatedToggleItem.defaultProps = {
  containerStyle: {},
  selectedItemStyle: {},
  innerComponent: () => {},
  isSelected: false,
};

export default AnimatedToggleItem;
