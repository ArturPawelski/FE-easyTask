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

//types for API
interface VerifyDataInterface {
  code: string;
  token: string;
}

interface ErrorResponse {
  success: false;
  data: null;
  message: string;
}

interface RegisterSuccessResponse {
  success: true;
  data: {
    name: string;
  };
  message: string;
}

interface VerifySuccessResponse {
  success: true;
  data: null;
  message: string;
}

type ApiResponseRegister = RegisterSuccessResponse | ErrorResponse;

type ApiResponseVerify = VerifySuccessResponse | ErrorResponse;
