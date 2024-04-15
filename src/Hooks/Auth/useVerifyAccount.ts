import { useMutation } from 'react-query';
import { AuthApi } from '../../API/authApi';

export const useVerifyAccount = () => {
  return useMutation((verifyData: VerifyDataInterface) => AuthApi.verifyAccount(verifyData));
};
