import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import colors from '../../config/colors';
import styles from './styles';
import {
  IS_FOCUS,
  IS_SUCCESS,
  IS_ERROR,
  IS_BLUR,
  IS_GRAYED_OUT,
} from '../../config/constants';
import RemixIcon from '../../utils/icon/RemixIcons';

class CustomTextInput extends Component {
  constructor(props, ref) {
    super();
    this.state = {
      status: IS_BLUR,
    };
  }

  componentDidMount(): void {
    this.setState({
      status: this.props.status,
    });
  }

  getInnerRef = () => this.ref;

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  advencedStyle = () => {
    switch (this.state.status) {
      case IS_FOCUS:
        return styles.focusStyle;
      case IS_BLUR:
        return this.props.containerStyle;
      case IS_ERROR:
        return styles.errorStyle;
      case IS_SUCCESS:
        return styles.successStyle;
      case IS_GRAYED_OUT:
        return styles.gayedOutStyle;
      default:
        return styles.containerStyle;
    }
  }

  render() {
    const {
      containerStyle,
      keyboardType,
      value,
      status,
      onSubmitEditing,
      placeholder,
      color,
      isEditable,
      holderIconName,
      onChangeText,
      secureTextEntry,
      sideComponent,
      onFocus,
      onBlur,
      maxLength,
      style,
    } = this.props;
    return (
      <View
        style={[
          styles.container,
          this.advencedStyle(),
          containerStyle,
        ]}
      >
        <TextInput
          ref={(r) => this.ref = r}
          style={[styles.defaultStyle, style]}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          value={value}
          onFocus={() => {
            this.setState({ status: IS_FOCUS }, () => {
              onFocus();
            });
          }}
          onBlur={() => {
            this.setState({ status: IS_BLUR }, () => {
              onBlur();
            });
          }}
          onChangeText={onChangeText}
          maxLength={maxLength}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          placeholderTextColor={colors.grey_550}
          color={status === IS_GRAYED_OUT ? colors.grey_550 : color}
          secureTextEntry={secureTextEntry}
          editable={isEditable || status !== IS_GRAYED_OUT}
        />
        {// action component for example
          sideComponent
        }
        {
          holderIconName
            ? (
              <View
                style={[styles.sideIcon, {
                  backgroundColor: this.state.status === IS_FOCUS
                    ? colors.blue_400_alpha
                    : colors.grey_200,
                }]}
              >
                <RemixIcon
                  name={holderIconName}
                  color={this.state.status === IS_FOCUS ? colors.blue_400 : colors.grey_300}
                  size={16}
                  style={{ alignItems: 'center' }}
                />
              </View>
            )
            : (null)
        }
      </View>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  containerStyle: PropTypes.shape(),
  handleSideButton: PropTypes.func,
  holderIcon: PropTypes.string,
  holderIconColor: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  isEditable: PropTypes.bool,
  status: PropTypes.string,
  sideComponent: PropTypes.func,
  color: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  maxLength: PropTypes.number,
};
TextInput.defaultProps = {
  onChangeText: () => {},
  onSubmitEditing: undefined,
  keyboardType: 'default',
  placeholder: 'Your place holder here',
  containerStyle: {},
  handleSideButton: () => {},
  holderIcon: undefined,
  holderIconColor: colors.blackColor,
  holderIconName: undefined,
  iconColor: colors.blackColor,
  isEditable: true,
  status: undefined,
  sideComponent: () => {},
  color: colors.blue_900,
  secureTextEntry: false,
};

export default CustomTextInput;
