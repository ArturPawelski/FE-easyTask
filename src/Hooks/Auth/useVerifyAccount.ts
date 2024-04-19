import { useMutation } from 'react-query';
import { AuthApi } from '../../API/authApi';
import { useToastNotifications } from '../../Components/UI/ToastMessage';
import { useNavigate } from 'react-router-dom';

export const useVerifyAccount = () => {
  const navigate = useNavigate();
  const { successToast, errorToast } = useToastNotifications();

  return useMutation((verifyData: VerifyDataInterface) => AuthApi.verifyAccount(verifyData), {
    onSuccess: (data) => {
      navigate('/auth/login');
      successToast(data.message);
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      errorToast(errorMessage);
    },
  });
};
