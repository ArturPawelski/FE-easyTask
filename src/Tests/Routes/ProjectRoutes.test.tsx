import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LoadingPage from '../../Components/UI/LoadingPage';

const NotFoundPage = lazy(() => import('../../Components/NotFoundPage'));

describe('Lazy loading of components', () => {
  it('should render LoadingPage as a fallback during component loading', async () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('Page Not Found')).toBeInTheDocument());
  });
});
