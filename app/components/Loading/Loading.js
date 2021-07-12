import React from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loading = (props) =>
  props.isShown ? (
    <View style={[styles.container, props.style]}>
      <ActivityIndicator size={props.size} color={props.color} />
    </View>
  ) : null;

Loading.propTypes = {
  size: PropTypes.string,
  style: PropTypes.any,
  isShown: PropTypes.bool,
};

Loading.defaultProps = {
  size: 'large',
  style: {},
  isShown: false,
};
export default Loading;
