import { useMutation, useQueryClient } from 'react-query';
import { AuthApi } from '../../API/authApi';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../Store/Auth/useUserStore';
import { useToastNotifications } from '../../Components/UI/ToastMessage';

export const useLogout = () => {
  const { successToast, errorToast } = useToastNotifications();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  return useMutation(AuthApi.logout, {
    onSuccess: (data) => {
      queryClient.clear();
      setUser('', '', '');
      navigate('/auth/login');
      successToast(data.message);
    },
    onError: (error: any) => {
      queryClient.clear();
      setUser('', '', '');
      navigate('/auth/login');
      const errorMessage = error.response?.data?.message || 'An error occurred during logout';
      errorToast(errorMessage);
    },
  });
};
