import axios from 'axios';
axios.defaults.withCredentials = true;

export const AuthApi = {
  register: async (userData: SignUpInterface): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, userData);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  login: async (loginData: SignInInterface): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, loginData);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  logout: async (): Promise<ApiResponse> => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/users/logout`);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  checkSession: async (): Promise<ApiResponseCheckSession> => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/check-session`);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  verifyAccount: async (verifyData: VerifyDataInterface): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/verify?token=${verifyData.token}`, { code: verifyData.code });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  resendVerification: async (email: string): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/resend-verification`, { email });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  sendResetPasswordEmail: async (email: string): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/reset-password`, { email });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  resetPassword: async (resetPasswordData: ResetPasswordInterface): Promise<ApiResponse> => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/send-new-password?token=${resetPasswordData.token}`, {
        verificationCode: resetPasswordData.verificationCode,
        newPassword: resetPasswordData.newPassword,
        confirmPassword: resetPasswordData.confirmPassword,
      });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
