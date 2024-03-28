import axios from 'axios';

export const AuthApi = {
  register: async (userData: SignUpInterface): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, userData);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
