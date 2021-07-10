/* eslint-disable import/no-anonymous-default-export */
import {call, put, select, StrictEffect} from 'redux-saga/effects';
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
const getState = (state: any) => state.blogReducer;

function* doGetListBlog(): Generator<StrictEffect> {
  let blogList: any =  yield call(API.getAllBlogs);
  let pageBlog = blogList.filter( (e: any, i: any) => i < 10);
  let totalElements = blogList.length;
  let check = totalElements % 10;
  let totalPages = 0;
  if (check > 0) {
    totalPages = ((totalElements - check)/10) + 1;
  } else totalPages = totalElements/10;
  yield put({
    type: ACTION_BLOGS_SUCCESS,
    payload: {
      blogList: blogList,
      pageBlog: pageBlog,
      totalElements: blogList.length,
      totalPages: totalPages,
    },
  }); 
}

function* doNewListBlog(payload:any): Generator<StrictEffect> {
  
  const state: any = yield select(getState);
  console.log('-------------payload---', payload)
  console.log('-------------state---', state)
  // defaul size = 10
  let pageBlog: any[] = state.blogList.filter( (e: any, i: any) => {
    if (payload > 0) {
      const iLast = payload*10;
      const iFirst = (payload-1)*10;
      return iFirst <= i && i <iLast;     
    } else return i < 10;
  });

  yield put({
    type: NEW_PAGGING_BLOGS_SUCCESS,
    payload: {
      pageBlog: pageBlog,
      page: payload,
    },
  });
}

export default function* (action: IAction) {
  switch (action.type) {
    case SHOW_BLOG: yield call(doShowBlog, action.payload); break;
    case ACTION_BLOGS: yield call(doGetListBlog); break;
    case NEW_PAGGING_BLOGS: yield call(doNewListBlog, action.payload); break;  
    default: throw new Error('Error===');
  }
}
