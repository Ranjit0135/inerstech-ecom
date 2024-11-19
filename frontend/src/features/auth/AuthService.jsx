import axios from "axios";
import { base_url } from "../../utils/base_url";

const register = async (data) => {
  try {
    const response = await axios.post(
      `${base_url}RegistrationApi/registration`
    );

    if (response) {
      return response.data;
    } else {
      throw new Error(" failed to register user");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const AuthService = { register };
