import axios from 'axios';

export function logUserIn() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: USER_LOGIN,
    payload: request
  }
  return;
};