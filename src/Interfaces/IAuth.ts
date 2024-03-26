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

interface LoginPropsI {
  setAuthMode: (mode: 'login' | 'register') => void;
}

interface RegisterPropsI extends LoginPropsI {}
