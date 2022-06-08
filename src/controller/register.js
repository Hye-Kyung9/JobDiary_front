import axios from "axios";

export const register = async ({ username, email, password }) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/routes/account/register",
      {
        username: username,
        email: email,
        password: password,
      },
      { withCredentials: false }
    );
    return response.data;
  } catch (err) {
    console.log("Error >>", err);
  }
};
