import {IAction} from '../../interface';
import {
  ACTION_BLOGS_SUCCESS,
  NEW_PAGGING_BLOGS_SUCCESS,
  SHOW_BLOG_SUCCESS,
} from '../actions/blogAction';

const initData = {
  blogList: [],
  pageBlog: [],
  blogItem: {},
  page: 1,
  // size: 10,
  totalElements: 0,
  totalPages: 0,
  currentPage: 0,
};

const blogReducer = (state = initData, {type, payload}: IAction) => {
  console.log(`blogReducer type: ${type} with payload: ${payload}`);
  switch (type) {
    case ACTION_BLOGS_SUCCESS:
      return {
        ...state,
        blogList: payload.blogList,
        pageBlog: payload.pageBlog,
        totalElements: payload.totalElements,
        totalPages: payload.totalPages,
      };
    case NEW_PAGGING_BLOGS_SUCCESS:
      return {
        ...state,
        pageBlog: payload.pageBlog,
        page: payload.page,
      };
    case SHOW_BLOG_SUCCESS:
      return {
        ...state,
        blogItem: payload.blogItem,
      };
    default:
      return state;
  }
};
export default blogReducer;
