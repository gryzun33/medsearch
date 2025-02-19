import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.tsx';
// import { BrowserRouter } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
