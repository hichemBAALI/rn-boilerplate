import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView, BackHandler, View,
} from 'react-native';
import {
  FONT_WEIGHT, HOME_SCREEN, IS_SUCCESS_MESSAGE, TEXT_ALIGN,
} from '../../../config/constants';
import colors from '../../../config/colors';
import styles from './styles';
import CustomText from '../../../components/CustomText';
import Button from '../../../components/Button';
import { exitApp } from '../../../utils/utils';
import ToggleGroup from '../../../components/ToggleGroup';
import { showFlashMessage } from '../../../utils/alerts';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.exitApp = exitApp.bind(this);
    this.state = {
      screenName: props.route.name,
      toggleValues: [
        { name: 'Hot' },
        { name: 'New' },
        { name: 'Top 10' },
        { name: 'Last seen' },
        { name: 'Best Selling' },
      ],
    };
  }

  componentWillMount(): void {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.exitApp);
  }

  componentDidMount() {
  }

  componentWillUnmount(): void {
    this.backHandler = BackHandler.removeEventListener('hardwareBackPress', this.exitApp);
  }

  itemRender = (item, isSelected) => (
    <View style={[styles.toggleItemStyle,
      {
        backgroundColor: isSelected ? colors.green_300 : colors.grey_100,
        borderColor: isSelected ? colors.green_300 : colors.grey_550,
      }]}
    >
      <CustomText
        content={item.name}
        size={14}
        textAlign={TEXT_ALIGN.CENTER}
        weight={isSelected ? FONT_WEIGHT.BOLD : FONT_WEIGHT.REGULAR}
        color={isSelected ? colors.white : colors.grey_300}
      />
    </View>
  )

  render() {
    const { screenName, toggleValues, index, toggleSelectedItem } = this.state;
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
        <ToggleGroup
          index={index}
          values={toggleValues}
          onItemClick={(item, index) => {
            this.setState({ toggleSelectedItem: item, index }, () => {
              showFlashMessage(`${toggleSelectedItem?.name} was clicked`, IS_SUCCESS_MESSAGE);
            });
          }}
          itemRender={(item) => this.itemRender(item)}
          itemRenderSelected={(item) => this.itemRender(item, true)}
          horizontal
          isScrollable
          itemWidth={null}
          itemHeight={56}
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
