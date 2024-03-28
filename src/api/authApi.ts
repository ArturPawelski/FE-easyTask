import axios from 'axios';

export const AuthApi = {
  register: async (userData: SignUpInterface) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, userData);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  },
};
