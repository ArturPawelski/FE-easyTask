import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Home } from '../Pages/Home/Home';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';

const ProjectRoutes: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          {/* <Route path='/meal/:mealName/:mealId' element={<NestedMeal />} />  */}

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* <Route
            path='/cart'
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path='/myaccount'
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          /> */}

          <Route path='*' element={<p>404</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ProjectRoutes;
