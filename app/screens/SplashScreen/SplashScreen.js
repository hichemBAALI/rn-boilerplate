import React, {Component} from 'react';
import {I18nManager, Image, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import RNRestart from 'react-native-restart';
import images from '../../config/images';
import styles from './styles';
import {dispatchSetIsSplashLoading} from '../../actions/connection';
import {updateCurrentLocale} from '../../utils/localization/localization';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.dispatchSetIsSplashLoading(false);
    }, 3000);
  }

  render() {
    const {lang} = this.props.configuration;
    updateCurrentLocale(lang);
    if (
      (lang === 'ar' && !I18nManager.isRTL)
      || (lang !== 'ar' && I18nManager.isRTL)
    ) {
      I18nManager.forceRTL(lang === 'ar');
      I18nManager.allowRTL(lang === 'ar');
      RNRestart.Restart();
      return <SafeAreaView />;
    }
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.ImageLogoStyle} source={images.SPLASH_LOGO} />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetIsSplashLoading: (isSplashLoading) =>
    dispatch(dispatchSetIsSplashLoading(isSplashLoading)),
});
const mapStateToProps = (state) => ({configuration: state.configuration});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
