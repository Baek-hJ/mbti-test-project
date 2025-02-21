import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/login';
import Profile from '../pages/Profile';
import Results from '../pages/results';
import Test from '../pages/test';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='Profile' element={<Profile/>} />
          <Route path='Results' element={<Results />} />
          <Route path='Test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;