import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRegister from '../pages/auth/UserRegister';
import UserLogin from '../pages/auth/UserLogin';
import PartnerRegister from '../pages/auth/PartnerRegister';
import PartnerLogin from '../pages/auth/PartnerLogin';
import RootRedirect from '../pages/general/RootRedirect.jsx';
import CreateFood from '../pages/food-partner/CreateFood.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/user/register' element={<UserRegister />} />
        <Route path='/user/login' element={<UserLogin />} />
        <Route path='/food-partner/register' element={<PartnerRegister />} />
        <Route path='/food-partner/login' element={<PartnerLogin />} />
        <Route path='/' element={<RootRedirect />} />
        <Route path='/create-food' element={<CreateFood />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;