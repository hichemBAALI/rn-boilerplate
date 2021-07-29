import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { LogBox, ActivityIndicator } from 'react-native'
import FlashMessage, { hideMessage } from 'react-native-flash-message'
import configureStore from './app/state/store'
import VersionTag from './app/components/versionTag/VersionTag'
import { ENV_COLOR, ENV_TAG } from './app/utils/env'
import RootStackScreens from './app/navigation/navigationStack'
import FlashMessageComponent from './app/components/FlashMessageComponent'
import RemixIcon from './app/utils/icon/RemixIcons'

const { persistor, store } = configureStore()

const App = () => {
  RemixIcon.loadFont()
  LogBox.ignoreLogs(['Warning:'])
  LogBox.ignoreAllLogs(true)
  return (
    <Provider store={store}>
      <VersionTag
        versionTagText={ENV_TAG}
        backgroundColor={ENV_COLOR}
      />
      <PersistGate
        loading={<ActivityIndicator />}
        persistor={persistor}
      >
        <NavigationContainer>
          <RootStackScreens />
        </NavigationContainer>
      </PersistGate>
      <FlashMessage
        position="bottom"
        renderCustomContent={(options) => (
          <FlashMessageComponent
            iconName={options.icon}
            message={options.customMessage}
            onCancelPressed={() => hideMessage()}
          />
        )}
      />
    </Provider>
  )
}

export default App
