import { useMutation } from 'react-query';
import { AuthApi } from '../../API/authApi';

export const useLogin = () => {
  return useMutation((loginData: SignInInterface) => AuthApi.login(loginData));
};
