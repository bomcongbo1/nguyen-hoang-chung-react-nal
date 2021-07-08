/* eslint-disable import/no-anonymous-default-export */
import http from "../utils/http-common";

const getAllBlogs = () => {
  return http.get(`/blogs`);
};

const getByBlogsId = (id: number) => {
  return http.get(`/blogs/${id}`);
};
export default {getAllBlogs, getByBlogsId };
  