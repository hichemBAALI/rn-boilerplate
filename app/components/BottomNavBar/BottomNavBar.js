import React, { useState } from 'react'
import {
  Animated,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import styles from './styles'
import BottomNavItem from './BottomNavItem'
import colors from '../../config/colors'
import RemixIcon from '../../utils/icon/RemixIcons'

const BottomNavBar = (props) => {
  const { navigation, descriptors, state, isArabic } = props
  const { routes } = state
  const totalWidth = Dimensions.get('window').width
  const routeLength = routes.length
  const activeTabWidth = totalWidth / routeLength
  const inactiveTabWidth = totalWidth / routeLength

  const [translateValue] = useState(new Animated.Value(0))
  const onPress = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name)
    }
  }

  const onTabBarPress = (route, routeIndex, isFocused) => {
    onPress(route, isFocused) // function that will change the route;
    Animated.spring(translateValue, {
      toValue: isArabic
        ? -routeIndex * inactiveTabWidth
        : routeIndex * inactiveTabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start() // the animation that animates the active tab circle
  }

  const onLongPress = (route) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    })
  }
  const focusedOptions =
    descriptors[state.routes[state.index].key].options
  if (focusedOptions.tabBarVisible === false) {
    return null
  }
  return (
    <SafeAreaView>
      <View style={styles.barContainer}>
        <View>
          <View style={StyleSheet.absoluteFillObject}>
            <Animated.View
              style={[
                styles.activeTab,
                {
                  width: activeTabWidth,
                  transform: [{ translateX: translateValue }],
                },
              ]}
            >
              <View style={styles.activeTabInner} />
            </Animated.View>
            {/* the container that we animate */}
          </View>
        </View>
        {routes.map((route, routeIndex) => {
          const { options } = descriptors[route.key]
          const isFocused = state.index === routeIndex
          return (
            <TouchableOpacity
              key={routeIndex}
              style={
                isFocused ? styles.activeTab : styles.inactiveTab
              }
              onPress={() => {
                onTabBarPress(route, routeIndex, isFocused)
              }}
              onLongPress={() => {
                onLongPress({ route })
              }}
              accessibilityLabel={options.tabBarAccessibilityLabel}
            >
              {options.isMainAction ? (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 88,
                    height: 88,
                    borderRadius: 80,
                    backgroundColor: colors.mainBackground,
                    alignSelf: 'center',
                    marginBottom: isFocused ? 62 : 36,
                  }}
                >
                  <View
                    style={{
                      width: 76,
                      height: 76,
                      borderRadius: 72,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: isFocused
                        ? colors.primary
                        : colors.secondary,
                    }}
                  >
                    <RemixIcon
                      name="qr-scan-2-line"
                      color={colors.white}
                      size={40}
                    />
                  </View>
                </View>
              ) : (
                <BottomNavItem
                  isFocused={isFocused}
                  tabBarIcon={
                    isFocused
                      ? options?.activeTabBarIcon
                      : options?.inactiveTabBarIcon
                  }
                  tabBarLabel={options?.tabBarLabel}
                />
              )}
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default BottomNavBar
