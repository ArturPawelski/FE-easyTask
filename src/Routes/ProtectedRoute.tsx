import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCheckSession } from '../Hooks/Auth/useCheckSession';
import LoadingPage from '../Components/UI/LoadingPage';

const ProtectedRoute: React.FC = () => {
  const { isLoading, isError } = useCheckSession();

  if (isLoading) return <LoadingPage />;

  if (isError) {
    return <Navigate to='/auth/login' replace />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
