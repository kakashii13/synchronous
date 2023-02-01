import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getAllChats = async () => {
  const { data } = await axios.get(`${baseUrl}/api/chats`);
  return data;
};
