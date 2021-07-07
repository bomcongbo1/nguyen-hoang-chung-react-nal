import {call, put} from 'redux-saga/effects';
import { IAction } from '../../../interface';
import request from '../../../services';
import {
  ACTION_BLOGS,
  ACTION_BLOGS_SUCCESS,
  NEW_PAGGING_BLOGS,
  NEW_PAGGING_BLOGS_SUCCESS,
  SHOW_BLOG,
  SHOW_BLOG_SUCCESS,
} from '../actions/blogAction';

function* doBlog(action: IAction) {
  try {
    let type = action.type;
    switch (type) {
      case ACTION_BLOGS: {
          return null;
        // let blogList = yield call(request.getAllBlogs);
        // return yield put({
        //   type: ACTION_BLOGS_SUCCESS,
        //   payload: {
        //     blogList: blogList,
        //   },
        // });
      }
      case NEW_PAGGING_BLOGS: {
        return null;
        // let blogList = [];
        // return yield put({
        //   type: NEW_PAGGING_BLOGS_SUCCESS,
        //   payload: {
        //     blogList: blogList,
        //   },
        // });
      }
      case SHOW_BLOG: {
        return null;
        // let blogItem = yield call(request.getByBlogsId, action.payload);
        // return yield put({
        //   type: SHOW_BLOG_SUCCESS,
        //   payload: {
        //     blogItem: blogItem,
        //   },
        // });
      }
      default:
        throw new Error('Error===');
    }
  } catch (error) {
    console.log('========error=  ', error);
  }
}

export default function* (action: IAction) {
  console.log('Blogs Saga - Action', action);
  yield call(doBlog, action);
}
