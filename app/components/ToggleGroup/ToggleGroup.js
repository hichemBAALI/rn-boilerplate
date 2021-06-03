import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, FlatList, Animated,
} from 'react-native';
import styles from './styles';
import NoItem from '../NoItem';

class ToggleGroup extends Component {
  constructor() {
    super();
    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    this.translateValue = new Animated.Value(0);
    this.setState({
      selectedIndex: this.props.index,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.index !== this.props.index) {
      this.setState({
        selectedIndex: this.props.index,
      }, () => {
        this.props.isScrollable && this.props.animateToIndex
          ? this.FlateList.scrollToIndex({ animated: true, index: this.state.selectedIndex })
          : null;
      });
    }
  }

  render() {
    const {
      horizontal,
      containerStyle,
        innerContainerStyle,
      values,
      onItemClick,
      itemRenderSelected,
      itemRender,
      itemWidth,
      itemHeight,
      numCol,
      ListEmptyComponent,
      refreshControl,
      extraData,
    } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <FlatList
          ref={(ref) => (this.FlateList = ref)}
          style={[styles.flatListContainer, innerContainerStyle]}
          key="v"
          contentContainerStyle={{ flexGrow: 1 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={values}
          extraData={extraData}
          horizontal={horizontal}
          numColumns={numCol}
          refreshing
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          windowSize={10}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={ListEmptyComponent}
          refreshControl={refreshControl}
          renderItem={({ item, index }) => (
            <View style={styles.toggleItemSurface}>
              <TouchableOpacity
                style={[styles.toggleItemSurface, { width: itemWidth, height: itemHeight }]}
                onPress={() => {
                  this.setState(
                    {
                      previousIndex: this.state.selectedIndex,
                      selectedIndex: index,
                      item,
                    },
                  ),
                  onItemClick(item, index);
                }}
              >
                {this.state.selectedIndex === index
                  ? (itemRenderSelected(item, this.state.previousIndex, index))
                  : (itemRender(item, index))}
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

    );
  }
}

ToggleGroup.propTypes = {
  index: PropTypes.number,
  values: PropTypes.array,
  containerStyle: PropTypes.shape(),
  innerContainerStyle: PropTypes.shape(),
  onItemClick: PropTypes.func,
  itemRender: PropTypes.func,
  itemRenderSelected: PropTypes.func,
  itemWidth: PropTypes.number,
  itemHeight: PropTypes.number,
  horizontal: PropTypes.bool,
  isScrollable: PropTypes.bool,
  numCol: PropTypes.number,
  ListEmptyComponent: PropTypes.any,
  refreshControl: PropTypes.any,
  extraData: PropTypes.any,
  animateToIndex: PropTypes.bool,
  flatRef: PropTypes.string,
};

ToggleGroup.defaultProps = {
  index: 0,
  values: [],
  containerStyle: {},
  innerContainerStyle: {},
  onItemClick: () => {},
  itemRender: () => {},
  itemRenderSelected: () => {},
  itemWidth: 100,
  itemHeight: 30,
  horizontal: true,
  isScrollable: false,
  numCol: 1,
  ListEmptyComponent: <NoItem />,
  refreshControl: null,
  animateToIndex: true,
  flatRef: 'flatList',
};
export default ToggleGroup;
