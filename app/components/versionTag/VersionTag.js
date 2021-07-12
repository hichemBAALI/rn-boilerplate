import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';
import CustomText from '../CustomText';
import {FONT_WEIGHT, TEXT_ALIGN} from '../../config/constants';
import colors from '../../config/colors';

class VersionTag extends Component {
  render() {
    return (
      <View>
        {this.props.versionTagText === '' ? null : (
          <View style={styles.container}>
            <CustomText
              style={[
                styles.diagonalRectangle,
                {backgroundColor: this.props.backgroundColor},
              ]}
              content={this.props.versionTagText}
              size={12}
              color={colors.white}
              weight={FONT_WEIGHT.BOLD}
              textAlign={TEXT_ALIGN.CENTER}
            />
          </View>
        )}
      </View>
    );
  }
}
export default VersionTag;
