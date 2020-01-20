import { LS_USER_DATA } from '../constants';

export function getUserDataFromLS() {
  const data = localStorage.getItem(LS_USER_DATA);
  let user = {};
  try {
    const user = JSON.parse(data);
    return user;
  } catch (err) {
    return user;
  }
}
