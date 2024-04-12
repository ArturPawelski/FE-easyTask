import { useQuery } from 'react-query';
import { AuthApi } from '../../api/authApi';

export const useCheckSession = () => {
  return useQuery('session', AuthApi.checkSession, {
    retry: false,
    refetchOnWindowFocus: false,
  });
};
