import { useMutation } from 'react-query';
import { AuthApi } from '../../api/authApi';

export const useRegister = () => {
  return useMutation((userData: SignUpInterface) => AuthApi.register(userData));
};
