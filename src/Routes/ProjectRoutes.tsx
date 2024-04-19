import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import LoadingPage from '../Components/UI/LoadingPage';
import NotFoundPage from '../Components/NotFoundPage';

const GuestRoute = lazy(() => import('./GuestRoute'));
const ProtectedRoute = lazy(() => import('./ProtectedRoute'));
const Home = lazy(() => import('../Pages/Home/Home'));
const AuthRoutes = lazy(() => import('./AuthRoutes'));

const LayoutWithNavbar: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

const ProjectRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route
              path='/'
              element={
                <LayoutWithNavbar>
                  <Home />
                </LayoutWithNavbar>
              }
            />
          </Route>

          <Route element={<GuestRoute />}>
            <Route path='/auth/*' element={<AuthRoutes />} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
export default ProjectRoutes;
