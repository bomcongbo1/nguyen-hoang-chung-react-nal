/* eslint-disable import/no-anonymous-default-export */
import {call, put, StrictEffect} from 'redux-saga/effects';
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

function* doShowBlog(payload:any): Generator<StrictEffect> {
  let blogItem: any = yield call(API.getByBlogsId, payload);
  yield put({
    type: SHOW_BLOG_SUCCESS,
    payload: {
      blogItem: blogItem,
    },
  });  
}

function* doGetListBlog(payload:any): Generator<StrictEffect> {
  let blogList = API.getAllBlogs();
  yield put({
    type: ACTION_BLOGS_SUCCESS,
    payload: {
      blogList: blogList,
    },
  }); 
}

function* doNewListBlog(payload:any): Generator<StrictEffect> {
  let blogList: any[] = [];
  yield put({
    type: NEW_PAGGING_BLOGS_SUCCESS,
    payload: {
      blogList: blogList,
    },
  });
}

export default function* (action: IAction) {
  switch (action.type) {
    case SHOW_BLOG: yield call(doShowBlog, action.payload); break;
    case ACTION_BLOGS: yield call(doGetListBlog, action.payload); break;
    case NEW_PAGGING_BLOGS: yield call(doNewListBlog, action.payload); break;  
    default: throw new Error('Error===');
  }
}
