import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { AuthApi } from '../../API/authApi';

vi.mock('axios', () => ({
  default: {
    post: vi.fn(),
    get: vi.fn(),
    delete: vi.fn(),
    defaults: {
      withCredentials: true,
    },
  },
}));

describe('AuthApi Tests', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('registers a user correctly', async () => {
    const mockUser = { name: 'name', email: 'email', confirmEmail: 'email', password: 'pass', confirmPassword: 'pass' };
    const mockResponse = { data: { message: 'Registration successful' } };
    vi.mocked(axios.post).mockResolvedValue(mockResponse);

    const response = await AuthApi.register(mockUser);
    expect(axios.post).toHaveBeenCalledWith(`${import.meta.env.VITE_API_URL}/users/register`, mockUser);
    expect(response).toEqual(mockResponse.data);
  });

  it('handles registration errors', async () => {
    const mockUser = { name: 'name', email: 'email', confirmEmail: 'email', password: 'pass', confirmPassword: 'pass' };
    const mockError = { response: { data: { message: 'Registration failed' }, status: 400 } };
    vi.mocked(axios.post).mockRejectedValue(mockError);

    try {
      await AuthApi.register(mockUser);
      throw new Error('This should not execute');
    } catch (error) {
      expect(error).toMatchObject({ response: { data: { message: 'Registration failed' }, status: 400 } });
    }
  });

  it('logs in a user correctly', async () => {
    const mockLogin = { email: 'testuser', password: 'password123' };
    const mockResponse = { data: { message: 'Login successful', token: 'abcdef' } };
    vi.mocked(axios.post).mockResolvedValue(mockResponse);

    const response = await AuthApi.login(mockLogin);
    expect(axios.post).toHaveBeenCalledWith(`${import.meta.env.VITE_API_URL}/users/login`, mockLogin);
    expect(response).toEqual(mockResponse.data);
  });
});
