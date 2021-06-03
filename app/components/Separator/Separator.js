import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import colors from '../../config/colors';
import styles from './styles';

const Separator = (props) => (
  <View style={
      [styles.SeparatorStyle,
        {
          height: props.isVertical ? props.size : 1,
          width: props.isVertical ? 1 : props.size ,
          backgroundColor: props.color,
        },

      ]}
  />
);

Separator.propTypes = {
  isVertical: PropTypes.bool,
  size: PropTypes.any,
  color: PropTypes.string,
  style: PropTypes.shape(),
};

Separator.defaultProps = {
  isVertical: false,
  size: undefined,
  color: colors.blue_900,
  style: {},
};
export default Separator;
