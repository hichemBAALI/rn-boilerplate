import React, { useEffect, useState } from 'react'
import { SafeAreaView, BackHandler, View } from 'react-native'
import {
  FONT_WEIGHT,
  HOME_SCREEN,
  IS_SUCCESS_MESSAGE,
  TEXT_ALIGN,
} from '../../../config/constants'
import colors from '../../../config/colors'
import styles from './styles'
import CustomText from '../../../components/CustomText'
import Button from '../../../components/Button'
import { exitApp } from '../../../utils/utils'
import ToggleGroup from '../../../components/ToggleGroup'
import { showFlashMessage } from '../../../utils/alerts'

const HomeScreen = (props) => {
  const [toggleValues] = useState([
    { name: 'Hot' },
    { name: 'New' },
    { name: 'Top 10' },
    { name: 'Last seen' },
    { name: 'Best Selling' },
  ])
  const [screenName] = useState(props.route.name)
  const [index, setIndex] = useState(0)
  const [toggleSelectedItem, setToggleSelectedItem] = useState()

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', exitApp)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', exitApp)
  }, [])

  useEffect(() => {
    toggleSelectedItem
      ? showFlashMessage(
          `${toggleSelectedItem?.name} was clicked`,
          IS_SUCCESS_MESSAGE,
        )
      : null
  }, [toggleSelectedItem])

  const handleItemClicked = (item, index) => {
    setIndex(index)
    setToggleSelectedItem(item)
  }

  const itemRender = (item, isSelected) => (
    <View
      style={[
        styles.toggleItemStyle,
        {
          backgroundColor: isSelected
            ? colors.green_300
            : colors.grey_100,
          borderColor: isSelected
            ? colors.green_300
            : colors.grey_550,
        },
      ]}
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
        onItemClick={handleItemClicked}
        itemRender={(item) => itemRender(item)}
        itemRenderSelected={(item) => itemRender(item, true)}
        horizontal
        isScrollable
        itemWidth={null}
        itemHeight={56}
      />
      <Button
        onPress={() => props.navigation.navigate(`${HOME_SCREEN}1`)}
        text="Next"
      />
    </SafeAreaView>
  )
}

export default HomeScreen
