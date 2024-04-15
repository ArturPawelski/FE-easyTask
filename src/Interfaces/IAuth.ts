interface SignInInterface {
  email: string;
  password: string;
}

interface SignUpInterface {
  name: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

interface ResendVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VerifyDataInterface {
  code: string;
  token: string;
}

interface User {
  name: string;
  email: string;
  id: string;
}

interface ErrorResponse {
  success: false;
  data: null;
  message: string;
}
interface SuccessResponse {
  success: true;
  data: null;
  message: string;
}

interface CheckSessionSuccessResponse {
  success: true;
  data: User;
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

type ApiResponseCheckSession = CheckSessionSuccessResponse | ErrorResponse;
