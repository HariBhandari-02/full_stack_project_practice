import axios from "axios";

export type UserPostInput = {
  title: string;
  image: string;
};

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const postUser = (data: UserPostInput) => {
 return API.post("/users/post", data);
};

export const getUser = () => {
  return API.get<UserPostInput[]>("/users/get");
};
