/* eslint-disable import/no-anonymous-default-export */
import {call, put} from 'redux-saga/effects';
import { IAction } from '../../interface';
import API from '../../services';
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
        let blogList = API.getAllBlogs();
        yield put({
          type: ACTION_BLOGS_SUCCESS,
          payload: {
            blogList: blogList,
          },
        });
        break;        
      }
      case NEW_PAGGING_BLOGS: {
        let blogList: any[] = [];
        yield put({
          type: NEW_PAGGING_BLOGS_SUCCESS,
          payload: {
            blogList: blogList,
          },
        });
        break; 
      }
      case SHOW_BLOG: {
        let blogItem = API.getByBlogsId(action.payload) ;
        yield put({
          type: SHOW_BLOG_SUCCESS,
          payload: {
            blogItem: blogItem,
          },
        });
        break;
      }
      default:
        throw new Error('Error===');
    }
  } catch (error) {
    console.log('========error=  ', error);
  }
}

export default function* (action: IAction) {
  // console.log('Blogs Saga - Action', action);
  yield call(doBlog, action);
}
