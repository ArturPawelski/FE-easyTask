import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCheckSession } from '../Hooks/Auth/useCheckSession';
import LoadingPage from '../Components/LoadingPage';

const ProtectedRoute: React.FC = () => {
  const { data, isLoading, isError } = useCheckSession();

  console.log(data);
  if (isLoading) return <LoadingPage />;

  if (isError) {
    return <Navigate to='/auth/login' replace />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
