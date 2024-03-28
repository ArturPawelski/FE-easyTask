// import { Navigate } from 'react-router-dom';
// import { AuthServices } from '../Services/AuthServices';
// import { useGetUserInfo } from '../Hooks/useGetUserInfo';

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  
//   const Token: string | null = AuthServices.getTokenFromLocalStorage();
//   const UserData: UserDataResponseInterface | null = useGetUserInfo();

//   if (!Token || !UserData) {
//     return <Navigate to='/login' />;
//   }
//   return children;
// };

// export default ProtectedRoute;