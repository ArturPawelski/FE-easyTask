import { useMutation } from 'react-query';
import { AuthApi } from '../../API/authApi';
import { useToastNotifications } from '../../Components/UI/ToastMessage';
import { useResendVerificationModalStore } from '../../Store/Auth/useResendVerificationModalStore';

export const useResendVerification = () => {
  const { closeModal } = useResendVerificationModalStore();
  const { successToast, errorToast } = useToastNotifications();

  return useMutation((email: string) => AuthApi.resendVerification(email), {
    onSuccess: (data) => {
      successToast(data.message);
      closeModal();
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      errorToast(errorMessage);
    },
  });
};
