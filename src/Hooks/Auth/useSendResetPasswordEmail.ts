import { useMutation } from 'react-query';
import { AuthApi } from '../../API/authApi';
import { useToastNotifications } from '../../Components/UI/ToastMessage';

export const useSendResetPasswordEmail = () => {
  const { successToast, errorToast } = useToastNotifications();

  return useMutation((email: string) => AuthApi.sendResetPasswordEmail(email), {
    onSuccess: (data) => {
      successToast(data.message);
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      errorToast(errorMessage);
    },
  });
};
