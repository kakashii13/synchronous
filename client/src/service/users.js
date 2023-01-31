import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getAll = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/users`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
