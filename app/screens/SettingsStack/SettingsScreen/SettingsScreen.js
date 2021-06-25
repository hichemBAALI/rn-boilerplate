import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {
  FONT_WEIGHT,
  HOME_SCREEN,
  SETTINGS_SCREEN,
  TEXT_ALIGN,
} from '../../../config/constants';
import colors from '../../../config/colors';
import styles from './styles';
import CustomText from '../../../components/CustomText';
import Button from '../../../components/Button';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {screenName: props.route.name};
  }

  componentDidMount() {}

  render() {
    const {screenName} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <CustomText
          content={`SettingsStack - ${screenName}`}
          size={18}
          textAlign={TEXT_ALIGN.CENTER}
          weight={FONT_WEIGHT.REGULAR}
          color={colors.grey_300}
          style={{padding: 16}}
        />
        <Button
          onPress={() => this.props.navigation.navigate(`${SETTINGS_SCREEN}1`)}
          text="Next"
        />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
