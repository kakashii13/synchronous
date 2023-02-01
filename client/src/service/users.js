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

export const getOne = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
