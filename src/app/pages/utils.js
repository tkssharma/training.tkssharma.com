import { LS_USER_DATA } from '../constants';
import { Mock } from '../graphql/mock/index';

export function getMockData(id) {
  return Mock.data.filter(i => i.id === id)[0];
}

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

export function getWebcastData(name) {
  return Mock.data.filter(i => {
    const title = i.snippet.title && i.snippet.title.toLowerCase();
    if (title && title.indexOf(name.toLowerCase()) !== -1) {
      return true;
    }
    return false;
  });
}

export function getTrainingData(name) {
  return Mock.data.filter(i => {
    const title = i.snippet.title && i.snippet.title.toLowerCase();
    if (title && title.indexOf(name.toLowerCase()) !== -1) {
      return true;
    }
    return false;
  });
}
