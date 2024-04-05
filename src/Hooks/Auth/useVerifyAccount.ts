import { useMutation } from 'react-query';
import { AuthApi } from '../../api/authApi';

export const useVerifyAccount = () => {
  return useMutation((verifyData: VerifyDataInterface) => AuthApi.verifyAccount(verifyData));
};
