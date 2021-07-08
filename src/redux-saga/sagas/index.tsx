import {all, takeLatest} from 'redux-saga/effects';
import {ACTION_BLOGS, NEW_PAGGING_BLOGS, SHOW_BLOG} from '../actions/blogAction';
import blogSaga from './sagaBlog';

const sagas = function* () {
  yield all([
    takeLatest(ACTION_BLOGS, blogSaga),
    takeLatest(SHOW_BLOG, blogSaga),
    takeLatest(NEW_PAGGING_BLOGS, blogSaga),
  ]);
};
export default sagas;
