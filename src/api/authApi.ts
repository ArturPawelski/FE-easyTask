import axios from 'axios';

export const AuthApi = {
  register: async (userData: SignUpInterface): Promise<ApiResponseRegister> => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, userData);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  verifyAccount: async (verifyData: VerifyDataInterface): Promise<ApiResponseVerify> => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/verify?token=${verifyData.token}`, { code: verifyData.code });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
