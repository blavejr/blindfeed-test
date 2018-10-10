import Api from '@/services/Api';
import store from '@/store/store.js';

export default {
  getComics(comicNumber) {
    return Api().get(`${comicNumber}`);
}
};