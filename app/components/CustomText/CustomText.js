import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {FONT_WEIGHT} from '../../config/constants';
import styles from './styles';
import colors from '../../config/colors';
import {fonts} from '../../utils/utils';

class CustomText extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    const {content, style, size, weight, color, textAlign, numberOfLines} =      this.props;
    const fontFamily = () => {
      switch (weight) {
        case FONT_WEIGHT.BOLD:
          return fonts().FONT_BOLD;
        case FONT_WEIGHT.MEDIUM:
          return fonts().FONT_MEDIUM;
        case FONT_WEIGHT.REGULAR:
          return fonts().FONT_REGULAR;
        case FONT_WEIGHT.LIGHT:
          return fonts().FONT_LIGHT;
        default:
          return fonts().FONT_REGULAR;
      }
    };
    return (
      <Text
        style={[
          styles.textStyle,
          {
            fontFamily: fontFamily(),
            fontSize: size,
            color,
            textAlign,
          },
          style,
        ]}
        numberOfLines={numberOfLines}>
        {content}
      </Text>
    );
  }
}

CustomText.propTypes = {
  content: PropTypes.any,
  style: PropTypes.shape(),
  size: PropTypes.number,
  weight: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  numberOfLines: PropTypes.number,
};

CustomText.defaultProps = {
  content: 'Lorem Ipsum',
  style: {},
  size: 12,
  weight: FONT_WEIGHT.REGULAR,
  color: colors.blue_950,
  textAlign: 'left',
  numberOfLines: 2,
};

export default CustomText;
