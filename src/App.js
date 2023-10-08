import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from './components/Common/SiteNav';
import SiteFooter from './components/Common/SiteFooter';
import HomePage from './components/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Contacts from './components/contacts/Contacts';

function App () {
  return (
    <div>
      <SiteNav />
      <Routes>
        <Route path='*' element={<HomePage />} />
        <Route path='/' exact={true} element={<HomePage />} />
        <Route path='/login' exact={true} element={<LoginPage />} />
        <Route path='/register' exact={true} element={<RegisterPage />} />
        <Route path='/contact' exact={true} element={<Contacts />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
