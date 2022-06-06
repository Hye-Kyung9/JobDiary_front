import axios from "axios";

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/routes/account/login",
      {
        email: email,
        password: password,
      }
    );
    return response.data;
  } catch (err) {
    console.log("Error >>", err);
  }
};
