import axios from 'axios';
import { BASE_URL } from './env';
// eslint-disable-next-line import/first
axios.defaults.baseURL = { BASE_URL };
exports.setHeader = (headers) => new Promise((resolve, reject) => {
  axios.defaults.headers = headers;
  axios.defaults.timeout = 10000;
  resolve();
  reject();
});

exports.API_PHONE_VERIFICATION = `${BASE_URL}`;
exports.API_PIN_CODE_VALIDATION = `${BASE_URL}/rivizi//subscription/confirmation`;
exports.API_REGISTRATION = `${BASE_URL}/rivizi/subscription/subscribe`;
exports.API_UPDATE_PROFILE = `${BASE_URL}/rivizi/subscription/update`;
exports.API_UPDATE_REGISTRATION = `${BASE_URL}`;
exports.API_LOGIN = `${BASE_URL}/rivizi/authentification/login`;
exports.API_CHANGE_PASSWORD = `${BASE_URL}/rivizi/authentification/change/password`;
exports.API_CHANGE_PHONE_NUMBER_REQUEST = `${BASE_URL}/rivizi/authentification/change/phonenumber`;
exports.API_CHANGE_PHONE_NUMBER_VALIDATION = `${BASE_URL}/rivizi/authentification/change/phonenumber`;
exports.API_CONTENTS = `${BASE_URL}/rivizi/exercises`;
exports.API_SCORE_HISTORY = `${BASE_URL}/v3/c1bd87e2-5c21-4456-92eb-0e7a6cd5b081`;
exports.API_GET_QUIZ = `${BASE_URL}/rivizi/quiz/content`;
exports.API_SET_QUIZ = `${BASE_URL}/rivizi/quiz/finished`;
exports.API_GET_QUIZ_CORRECTION = `${BASE_URL}/rivizi/quiz/history`;
exports.API_GET_QUIZ_HISTORY = `${BASE_URL}/rivizi/quiz/history_list`;
exports.API_LANGUAGES = `${BASE_URL}`;
