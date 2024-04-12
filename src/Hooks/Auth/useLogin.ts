import { useMutation } from 'react-query';
import { AuthApi } from '../../api/authApi';

export const useLogin = () => {
  return useMutation((loginData: SignInInterface) => AuthApi.login(loginData));
};
