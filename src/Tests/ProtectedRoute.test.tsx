import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../Routes/ProtectedRoute';

vi.mock('../Hooks/Auth/useCheckSession', () => ({
  useCheckSession: () => ({ isLoading: true, isError: false }),
}));

describe('ProtectedRoute', () => {
  it('renders LoadingPage when session is being checked', () => {
    render(
      <BrowserRouter>
        <ProtectedRoute />
      </BrowserRouter>
    );
    const spinner = screen.getByRole('progressbar');
    const text = screen.getByText('Loading...');

    expect(spinner).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
