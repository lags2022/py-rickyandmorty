import axios from "axios";

const userUrl = "http://localhost:3001/ramusers/users";

export const createUser = async (user) => {
  try {
    await axios.post(userUrl, user);
  } catch (error) {
    window.alert(error);
  }
};

export const loginUser = async (credentials) => {
  try {
    const { data } = await axios.post(`${userUrl}/login`, credentials);
    return data;
  } catch (error) {
    window.alert(error);
  }
};
