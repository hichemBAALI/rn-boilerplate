import { IS_SPLASH_LOADING } from '../../config/constants'

const dispatchSetIsSplashLoading = (isSplashLoading) =>
  function (dispatch) {
    return dispatch({ type: IS_SPLASH_LOADING, isSplashLoading })
  }

export { dispatchSetIsSplashLoading }
