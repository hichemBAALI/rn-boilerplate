import React, { Component } from 'react';
import { render } from 'redux-logger/src/diff';
import { TouchableOpacity, View } from 'react-native';
import RemixIcon from '../../utils/icon/RemixIcons';
import colors from '../../config/colors';
import CustomText from '../CustomText';
import { FONT_WEIGHT } from '../../config/constants';
import styles from './styles';

const FlashMessageComponent = (props) => {
  const {
    iconName,
    message,
    onCancelPressed,
  } = props;
  return (
    <View style={[styles.container]}>
      <RemixIcon
        name={iconName}
        size={24}
        color={colors.white}
      />
      <CustomText
        content={message}
        color={colors.white}
        size={14}
        weight={FONT_WEIGHT.MEDIUM}
        style={styles.messageStyle}
      />
      <TouchableOpacity
        onPress={onCancelPressed}
        style={styles.closeIconStyle}
      >
        <RemixIcon
          name="close-line"
          size={24}
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FlashMessageComponent;
