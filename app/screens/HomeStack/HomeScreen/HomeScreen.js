import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView, TouchableOpacity,
} from 'react-native';
import {
  FONT_WEIGHT, HOME_SCREEN, IS_BLUR, IS_FOCUS, TEXT_ALIGN,
} from '../../../config/constants';
import colors from '../../../config/colors';
import styles from './styles';
import CustomText from '../../../components/CustomText';
import Button from '../../../components/Button';
import CustomTextInput from '../../../components/CustomTextInput';
import { Log } from '../../../utils/utils';
import RemixIcon from '../../../utils/icon/RemixIcons';
import { locale } from '../../../utils/localization/localization';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: props.route.name,
      secureTextEntry: true,
    };
  }

  componentDidMount() {
  }

  render() {
    const { screenName } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <CustomText
          content={`HomeStack - ${screenName}`}
          size={18}
          textAlign={TEXT_ALIGN.CENTER}
          weight={FONT_WEIGHT.REGULAR}
          color={colors.grey_300}
          style={{ padding: 16 }}
        />
        <CustomTextInput
          onChangeText={(text) => Log(text)}
          holderIconName="user-3-line"
          status={this.state.usernameStatus}
          value={this.state.username}
          onFocus={() => { this.setState({ usernameStatus: IS_FOCUS }); }}
          onBlur={() => { this.setState({ usernameStatus: IS_BLUR }); }}
          placeholder={locale('Username')}
        />
        <CustomTextInput
          onChangeText={(text) => Log(text)}
          holderIconName="lock-2-line"
          status={this.state.passwordStatus}
          value={this.state.password}
          onFocus={() => { this.setState({ passwordStatus: IS_FOCUS }); }}
          onBlur={() => { this.setState({ passwordStatus: IS_BLUR }); }}
          secureTextEntry={this.state.secureTextEntry}
          placeholder={locale('Password')}
          sideComponent={(
            <TouchableOpacity
              onPress={() => this.setState({
                secureTextEntry: !this.state.secureTextEntry,
              })}
            >
              <RemixIcon
                name={this.state.secureTextEntry ? 'eye-line' : 'eye-off-line'}
                size={18}
                color={colors.grey_550}
              />
            </TouchableOpacity>
              )}
        />
        <Button
          onPress={() => this.props.navigation.navigate(`${HOME_SCREEN}1`)}
          text="Next"
        />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
