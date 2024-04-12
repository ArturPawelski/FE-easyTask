import { useMutation } from 'react-query';
import { AuthApi } from '../../api/authApi';

export const useResendVerification = () => {
  return useMutation((email: string) => AuthApi.resendVerification(email));
};
