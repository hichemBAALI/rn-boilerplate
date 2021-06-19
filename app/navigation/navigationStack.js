import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import SplashScreen from '../screens/SplashScreen';
import {
    SPLASH_SCREEN,
    HOME_SCREEN,
    SCAN_SCREEN,
    SETTINGS_SCREEN,
    HOME_STACK,
    SCAN_STACK,
    SETTINGS_STACK, SPLASH_STACK, BOTTOM_NAV_STACK, LOGIN_SCREEN, LOGIN_STACK,
} from '../config/constants';
import colors from '../config/colors';
import BottomNavBar from '../components/BottomNavBar';
import Header from '../components/Header';
import RemixIcon from '../utils/icon/RemixIcons';

import HomeScreen from '../screens/HomeStack/HomeScreen';
import ScanScreen from '../screens/ScanStack/ScanScreen';
import SettingsScreen from '../screens/SettingsStack/SettingsScreen';
import LoginScreen from "../screens/LoginStack/HomeScreen/LoginScreen";

const RootStack = createStackNavigator();
const SplashStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ScanStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

const headerBack = () => (
  <RemixIcon
    name="arrow-left-line"
    color={colors.black}
    size={30}
  />
);

const headerRender = (props) => (
  <Header
    {...props}
  />
);

const SplashStackScreens = () => (
  <SplashStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <SplashStack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
  </SplashStack.Navigator>
);

const LoginStackScreens = () => (
  <LoginStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <LoginStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
  </LoginStack.Navigator>
);

const HomeStackScreens = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen
      name={HOME_SCREEN}
      component={HomeScreen}
      options={{
        headerShown: true,
        headerTitle: (props) => (headerRender(props)),
        headerStyle: {
          elevation: 4,
          borderBottomWidth: 1,
          backgroundColor: colors.mainBackground,
        },
        headerBackImage: () => null,
      }}
    />
    <HomeStack.Screen
      name={`${HOME_SCREEN}1`}
      component={HomeScreen}
      options={{
        headerShown: true,
        headerTitle: (props) => (headerRender(props)),
        headerStyle: {
          elevation: 4,
          borderBottomWidth: 1,
          backgroundColor: colors.mainBackground,
        },
        headerBackImage: () => headerBack(),
      }}
    />
  </HomeStack.Navigator>
);

const ScanStackScreens = () => (
  <ScanStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ScanStack.Screen
      name={SCAN_SCREEN}
      component={ScanScreen}
      options={{
        headerShown: true,
        headerTitle: (props) => (headerRender(props)),
        headerStyle: {
          elevation: 4,
          borderBottomWidth: 1,
          backgroundColor: colors.mainBackground,
        },
        headerBackImage: () => null,
      }}
    />
    <ScanStack.Screen
      name={`${SCAN_SCREEN}1`}
      component={ScanScreen}
      options={{
        headerShown: true,
        headerTitle: (props) => (headerRender(props)),
        headerStyle: {
          elevation: 4,
          borderBottomWidth: 1,
          backgroundColor: colors.mainBackground,
        },
        headerBackImage: () => headerBack(),
      }}
    />
  </ScanStack.Navigator>
);

const SettingsStackScreens = () => (
  <SettingsStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <SettingsStack.Screen
      name={SETTINGS_SCREEN}
      component={SettingsScreen}
      options={{
        headerShown: true,
        headerTitle: (props) => (headerRender(props)),
        headerStyle: {
          elevation: 4,
          borderBottomWidth: 1,
          backgroundColor: colors.mainBackground,
        },
        headerBackImage: () => null,
      }}
    />
    <SettingsStack.Screen
      name={`${SETTINGS_SCREEN}1`}
      component={SettingsScreen}
      options={{
        headerShown: true,
        headerTitle: (props) => (headerRender(props)),
        headerStyle: {
          elevation: 4,
          borderBottomWidth: 1,
          backgroundColor: colors.mainBackground,
        },
        headerBackImage: () => headerBack(),
      }}
    />
  </SettingsStack.Navigator>
);

const BottomNavScreens = () => (
  <TabStack.Navigator
    tabBar={(props) => (
      <BottomNavBar
        {...props}
        isLabelShown={false}
        isArabic={false}
      />
    )}
    tabBarOptions={{
      showLabel: false,
      pressColor: colors.blue_300,
      style: {
        position: 'absolute',
        borderColor: colors.grey_100,
      },
    }}
  >
    <TabStack.Screen
      name={HOME_STACK}
      options={() => ({
        activeTabBarIcon: 'home-5-fill',
        inactiveTabBarIcon: 'home-5-line',
      })}
      component={HomeStackScreens}
    />
    <TabStack.Screen
      name={SCAN_STACK}
      options={{
        isMainAction: true,
      }}
      component={ScanStackScreens}
    />
    <TabStack.Screen
      name={SETTINGS_STACK}
      options={{
        activeTabBarIcon: 'settings-3-fill',
        inactiveTabBarIcon: 'settings-3-line',
      }}
      component={SettingsStackScreens}
    />
  </TabStack.Navigator>
);

const RootStackScreens = () => {
  const isSplashLoading = useSelector((state) => state.connection.isSplashLoading);
  if (isSplashLoading) {
    return (
      <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name={SPLASH_STACK} component={SplashStackScreens} />
      </RootStack.Navigator>
    );
  }
  return (
    <RootStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={LOGIN_STACK} component={LoginStackScreens} />
      <RootStack.Screen name={BOTTOM_NAV_STACK} component={BottomNavScreens} />
    </RootStack.Navigator>
  );
};

export default RootStackScreens;
