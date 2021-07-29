import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native'
import styles from './styles'
import NoItem from '../NoItem'

const ToggleGroup = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(props.index)
  const [previousIndex, setPreviousIndex] = useState()
  const refContainer = useRef(null)

  useEffect(() => {
    const { index, isScrollable, animateToIndex } = props
    setSelectedIndex(index)
    refContainer.current && isScrollable && animateToIndex
      ? refContainer.current.scrollToIndex({
          animated: true,
          index: selectedIndex,
        })
      : null
  }, [props.index])

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
  } = props
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        ref={refContainer}
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
        keyExtractor={(index) => index.toString()}
        ListEmptyComponent={ListEmptyComponent}
        refreshControl={refreshControl}
        renderItem={({ item, index }) => (
          <View style={styles.toggleItemSurface}>
            <TouchableOpacity
              style={[
                styles.toggleItemSurface,
                { width: itemWidth, height: itemHeight },
              ]}
              onPress={async () => {
                await setPreviousIndex(selectedIndex)
                setSelectedIndex(index)
                onItemClick(item, index)
              }}
            >
              {selectedIndex === index
                ? itemRenderSelected(item, previousIndex, index)
                : itemRender(item, index)}
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
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
}

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
}
export default ToggleGroup
