import { useMutation } from 'react-query';
import { AuthApi } from '../../API/authApi';

export const useResendVerification = () => {
  return useMutation((email: string) => AuthApi.resendVerification(email));
};
