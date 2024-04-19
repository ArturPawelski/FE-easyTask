import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCheckSession } from '../Hooks/Auth/useCheckSession';
import LoadingPage from '../Components/UI/LoadingPage';

const GuestRoute: React.FC = () => {
  const { isLoading, isError } = useCheckSession();

  if (isLoading) return <LoadingPage />;

  if (isError) {
    return <Outlet />;
  }

  return <Navigate to='/' replace />;
};
export default GuestRoute;
