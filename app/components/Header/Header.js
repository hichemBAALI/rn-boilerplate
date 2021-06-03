import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import CustomText from '../CustomText';
import {
  FONT_WEIGHT, TEXT_ALIGN,
} from '../../config/constants';
import colors from '../../config/colors';
import RemixIcon from '../../utils/icon/RemixIcons';
import images from '../../config/images';

const Header = (props) => (
  <View style={[styles.container]}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <CustomText
        content={props.children}
        size={14}
        weight={FONT_WEIGHT.BOLD}
        color={colors.blackColor}
        textAlign={TEXT_ALIGN.CENTER}
        style={{ padding: 16 }}
      />
    </View>
  </View>
);

Header.propTypes = {
};

Header.defaultProps = {
};
export default Header;
