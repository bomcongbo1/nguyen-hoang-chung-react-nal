export const ACTION_BLOGS = 'ACTION_BLOGS';
export const ACTION_BLOGS_SUCCESS = 'ACTION_BLOGS_SUCCESS';
export const SHOW_BLOG = 'SHOW_BLOG';
export const SHOW_BLOG_SUCCESS = 'SHOW_BLOG_SUCCESS';

export const NEW_PAGGING_BLOGS = 'NEW_PAGGING_BLOGS';
export const NEW_PAGGING_BLOGS_SUCCESS = 'NEW_PAGGING_BLOGS_SUCCESS';

export const actionGetListBlogs = () => ({
  type: ACTION_BLOGS,
});
export const actionShowBlogItem = (payload: any) => ({
  type: SHOW_BLOG,
  payload: payload,
});

export const actionNewPagging = (payload: any) => ({
  type: NEW_PAGGING_BLOGS,
  payload: payload,
});
