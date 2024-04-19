import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../Components/NotFoundPage';

const Login = lazy(() => import('../Pages/Auth/Login'));
const Register = lazy(() => import('../Pages/Auth/Register'));
const VerifyAccount = lazy(() => import('../Pages/Auth/VerifyAccount'));
const ForgotPassword = lazy(() => import('../Pages/Auth/ForgotPassword'));
const ResetPassword = lazy(() => import('../Pages/Auth/ResetPassword'));

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='verify' element={<VerifyAccount />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='reset-password' element={<ResetPassword />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AuthRoutes;
