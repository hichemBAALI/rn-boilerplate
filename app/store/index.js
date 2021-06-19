import { applyMiddleware, compose, createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
  persistStore,
  persistCombineReducers,
} from 'redux-persist';
import rootReducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'configuration'],
};
const logger = createLogger({
  collapsed: true,
  diff: true,
});

const reducers = persistCombineReducers(persistConfig, rootReducers);

const configureStore = () => {
  const store = createStore(
    reducers,
    compose(applyMiddleware(thunk, logger)),
  );
  const persistor = persistStore(store);

  return { persistor, store };
};

export default configureStore;
