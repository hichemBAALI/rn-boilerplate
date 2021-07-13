import {
  DESTROY_SESSION,
  IS_SPLASH_LOADING,
} from '../config/constants'

const defaultState = { isSplashLoading: true }

export default (state = defaultState, action) => {
  switch (action.type) {
    case IS_SPLASH_LOADING:
      return {
        ...state,
        isSplashLoading: action.isSplashLoading,
      }
    default:
      return state
  }
}
