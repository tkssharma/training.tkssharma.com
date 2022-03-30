import { LS_USER_DATA } from '../constants';
import { Mock } from '../graphql/mock/index';
import { Playlists } from '../graphql/mock/playlist';

export function getMockData(id) {
  const playlist = Mock.data.filter(i => i.id === id)[0];
  const items = Playlists.find(i => i.key === id);
  const playlistItems = items && items.value;
  playlist.items = playlistItems;
  return playlist;
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
