import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView, TouchableOpacity, Image, View,
} from 'react-native';
import {
  BOTTOM_NAV_STACK,
  FONT_WEIGHT, HOME_SCREEN, HOME_STACK, IS_BLUR, IS_FOCUS, TEXT_ALIGN,
} from '../../../config/constants';
import colors from '../../../config/colors';
import styles from './styles';
import CustomText from '../../../components/CustomText';
import Button from '../../../components/Button';
import CustomTextInput from '../../../components/CustomTextInput';
import { Log } from '../../../utils/utils';
import RemixIcon from '../../../utils/icon/RemixIcons';
import { locale } from '../../../utils/localization/localization';
import images from '../../../config/images';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: props.route.name,
      secureTextEntry: true,
    };
  }

  componentDidMount() {
  }

  handleLogin = () => {
    this.props.navigation.navigate(BOTTOM_NAV_STACK);
  }

  render() {
    const { screenName } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <CustomText
          content={`LoginStack - ${screenName}`}
          size={18}
          textAlign={TEXT_ALIGN.CENTER}
          weight={FONT_WEIGHT.REGULAR}
          color={colors.grey_300}
          style={{ padding: 16 }}
        />
        <Image
          source={images.SPLASH_LOGO}
          style={styles.imageStyle}
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
        <View style={{ flexDirection: 'row' }}>
          <CustomText
            content={locale('Forget Password')}
            size={12}
            textAlign={TEXT_ALIGN.RIGHT}
            weight={FONT_WEIGHT.BOLD}
            color={colors.grey_300}
            style={styles.forgetPasswordStyle}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            onPress={this.handleLogin}
            text={locale('Login')}
            textSize={18}
            style={{ flex: 1, margin: 8 }}
          />
        </View>

      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
