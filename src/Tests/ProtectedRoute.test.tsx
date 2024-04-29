import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../Routes/ProtectedRoute';
import * as AuthHook from '../Hooks/Auth/useCheckSession';

vi.mock('../Hooks/Auth/useCheckSession', () => ({
  useCheckSession: vi.fn(),
}));

const mockedUseCheckSession = AuthHook.useCheckSession as any;

describe('ProtectedRoute', () => {
  beforeEach(() => {
    vi.resetAllMocks(); // Ensures mocks are reset before each test
    cleanup(); // Clean up the DOM after each test
  });

  it('redirects to login when there is an error', async () => {
    // Mocking an error scenario for this specific test
    mockedUseCheckSession.mockImplementation(() => ({
      isLoading: false,
      isError: true,
      data: undefined,
      error: undefined,
    }));

    render(
      <BrowserRouter>
        <ProtectedRoute />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(window.location.pathname).toBe('/auth/login');
    });
  });

  it('renders LoadingPage when session is being checked', () => {
    // Mocking a loading scenario for this test
    mockedUseCheckSession.mockImplementation(() => ({
      isLoading: true,
      isError: false,
      data: undefined,
      error: undefined,
    }));

    render(
      <BrowserRouter>
        <ProtectedRoute />
      </BrowserRouter>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
