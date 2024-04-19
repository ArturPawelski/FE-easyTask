import { useMutation } from 'react-query';
import { AuthApi } from '../../API/authApi';
import { useToastNotifications } from '../../Components/UI/ToastMessage';
import { useNavigate } from 'react-router-dom';
import { useResendVerificationModalStore } from '../../Store/Auth/useResendVerificationModalStore';

export const useLogin = () => {
  const { openModal } = useResendVerificationModalStore();
  const { successToast, errorToast } = useToastNotifications();
  const navigate = useNavigate();

  return useMutation((loginData: SignInInterface) => AuthApi.login(loginData), {
    onSuccess: (data) => {
      successToast(data.message);
      navigate('/');
    },
    onError: (error: any) => {
      if (error.response?.status === 403) {
        openModal();
      }
      const errorMessage = error.response?.data?.message || 'An error occurred during login.';
      errorToast(errorMessage);
    },
  });
};
