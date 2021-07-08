import { ApiClient } from "../utils/http-common";


const getAllBlogs = () => {
  return ApiClient.get(`/blogs`);
};

const getByBlogsId = (id: any) => {
  return ApiClient.get(`/blogs/${id}`);
};
export default {getAllBlogs, getByBlogsId };
  