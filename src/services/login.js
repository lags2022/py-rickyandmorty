import axios from "axios";

const userUrl = `${process.env.REACT_APP_URL_API}/ramusers/users`

export const createUser = async (user) => {
  try {
    await axios.post(userUrl, user);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (credentials) => {
  try {
    const { data } = await axios.post(`${userUrl}/login`, credentials);
    if (!data) throw new Error("user not found");
    return data;
  } catch (error) {
    console.log(error);
  }
};
