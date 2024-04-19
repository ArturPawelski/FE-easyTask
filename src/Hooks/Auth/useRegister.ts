import { useMutation } from 'react-query';
import { AuthApi } from '../../API/authApi';
import { useToastNotifications } from '../../Components/UI/ToastMessage';

export const useRegister = () => {
  const { successToast, errorToast } = useToastNotifications();

  return useMutation((userData: SignUpInterface) => AuthApi.register(userData), {
    onSuccess: (data) => {
      successToast(data.message);
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'An error occurred during registration.';
      errorToast(errorMessage);
    },
  });
};
