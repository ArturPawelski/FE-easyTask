import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import ProtectedRoute from '../../Routes/ProtectedRoute';
import * as AuthHook from '../../Hooks/Auth/useCheckSession';

vi.mock('../../Hooks/Auth/useCheckSession', () => ({
  useCheckSession: vi.fn(),
}));

const mockedUseCheckSession = AuthHook.useCheckSession as any;
const ChildComponent = () => <div>Child Component</div>;
const LoginComponent = () => <div>Login</div>;

describe('ProtectedRoute', () => {
  beforeEach(() => {
    vi.resetAllMocks(); // Ensures mocks are reset before each test
    cleanup(); // Clean up the DOM after each test
  });

  it('renders the child component when there is no error and no loading', async () => {
    // Mocking good scenario
    mockedUseCheckSession.mockImplementation(() => ({
      isLoading: false,
      isError: false,
      data: undefined,
      error: undefined,
    }));

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<ChildComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
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
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<ChildComponent />} />
          </Route>
          <Route path='/auth/login' element={<LoginComponent />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
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
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<ChildComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
