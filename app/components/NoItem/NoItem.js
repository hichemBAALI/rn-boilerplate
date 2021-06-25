import React, {Component} from 'react';
import {View} from 'react-native';
import {locale} from '../../utils/localization/localization';
import styles from './styles';
import CustomText from '../CustomText';
import {FONT_WEIGHT} from '../../config/constants';
import colors from '../../config/colors';

class NoItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomText
          weight={FONT_WEIGHT.BOLD}
          size={18}
          color={colors.grey_200}
          content={locale('no item')}
        />
      </View>
    );
  }
}
export default NoItem;
