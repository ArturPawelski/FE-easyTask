// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import ProtectedRoute from './ProtectedRoute';
// import Navbar from '../Components/Navbar';
// import Home from '../Pages/Home/Home';
// import Cart from '../Pages/Cart/Cart';
// import MyProfile from '../Pages/MyProfile/MyProfile';
// import LoginAuth from '../Pages/Auth/LoginAuth';
// import RegisterAuth from '../Pages/Auth/RegisterAuth';
// import NestedMeal from '../Pages/Home/NestedMeal';

// const ProjectRoutes: React.FC = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />

//           <Route path='/meal/:mealName/:mealId' element={<NestedMeal />} />

//           <Route path='/login' element={<LoginAuth />} />
//           <Route path='/register' element={<RegisterAuth />} />

//           <Route
//             path='/cart'
//             element={
//               <ProtectedRoute>
//                 <Cart />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path='/myaccount'
//             element={
//               <ProtectedRoute>
//                 <MyProfile />
//               </ProtectedRoute>
//             }
//           />

//           <Route path='*' element={<p>404</p>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default ProjectRoutes;