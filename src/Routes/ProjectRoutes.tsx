import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import LoadingPage from '../Components/LoadingPage';
import NotFoundPage from '../Components/NotFoundPage';

interface LayoutProps {
  children: React.ReactNode;
}

const ProtectedRoute = lazy(() => import('./ProtectedRoute'));
const Home = lazy(() => import('../Pages/Home/Home'));
const Login = lazy(() => import('../Pages/Auth/Login'));
const Register = lazy(() => import('../Pages/Auth/Register'));
const VerifyAccount = lazy(() => import('../Pages/Auth/VerifyAccount'));

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

          <Route
            path='/auth/login'
            element={
              <BasicLayout>
                <Login />
              </BasicLayout>
            }
          />
          <Route
            path='/auth/register'
            element={
              <BasicLayout>
                <Register />
              </BasicLayout>
            }
          />
          <Route
            path='/auth/verify'
            element={
              <BasicLayout>
                <VerifyAccount />
              </BasicLayout>
            }
          />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
export default ProjectRoutes;

const LayoutWithNavbar: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

const BasicLayout: React.FC<LayoutProps> = ({ children }) => <>{children}</>;
