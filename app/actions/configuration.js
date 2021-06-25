import {
  CHANGE_LANGUAGE,
  GET_LANGUAGES,
  IS_LOADING,
  STATUS_OK,
} from '../config/constants';
import axios from 'axios';
import {API_LANGUAGES} from '../utils/api';
import {showRejectFlashMessage} from '../utils/alerts';
import {crashlyticsRecordError, Log} from '../utils/utils';

const dispatchChangeLanguage = lang =>
  function (dispatch) {
    return new Promise(resolve => {
      dispatch({
        type: CHANGE_LANGUAGE,
        lang,
      });
      resolve();
    });
  };

const dispatchLanguages = languages => ({
  type: GET_LANGUAGES,
  languages,
});

const getLanguages = () =>
  function (dispatch) {
    return new Promise((resolve, reject) => {
      axios
        .get(API_LANGUAGES)
        .then(response => {
          Log(response.data);
          if (response.status === STATUS_OK) {
            const {data} = response;
            dispatch(dispatchLanguages(data));
            resolve(response);
          }
        })
        .catch(error => {
          Log(error?.response);
          crashlyticsRecordError(error);
          showRejectFlashMessage(error);
          reject();
        });
    });
  };

export {dispatchChangeLanguage, getLanguages};
