import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Home = lazy(() => import('../Pages/Home/Home'));
const Login = lazy(() => import('../Pages/Auth/Login'));
const Register = lazy(() => import('../Pages/Auth/Register'));

const ProjectRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <LayoutWithNavbar>
                <Home />
              </LayoutWithNavbar>
            }
          />
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
          <Route path='*' element={<p>404</p>} />
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
