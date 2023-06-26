import axios from "axios";

//quitar el fly.io para desarrollo local
// const userUrl = "http://localhost:3001/ramusers/users";
const userUrl = "https://backrickandmorty.fly.dev/ramusers/users";

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
    return data;
  } catch (error) {
    console.log(error);
  }
};
