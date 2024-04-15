import { useMutation } from 'react-query';
import { AuthApi } from '../../API/authApi';

export const useRegister = () => {
  return useMutation((userData: SignUpInterface) => AuthApi.register(userData));
};
