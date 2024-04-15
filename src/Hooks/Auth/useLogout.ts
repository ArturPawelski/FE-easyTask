import { useMutation, useQueryClient } from 'react-query';
import { AuthApi } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../store/useUserStore';
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
      const errorMessage = error.response?.data?.message || 'An error occurred during logout';
      errorToast(errorMessage);
    },
  });
};
