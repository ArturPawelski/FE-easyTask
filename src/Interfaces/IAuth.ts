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

interface SuccessResponse {
  success: true;
  data: {
    name: string;
  };
  message: string;
}

interface ErrorResponse {
  success: false;
  data: null;
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;
