import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
// import { BrowserRouter } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import Registration from './pages/Registration/Registration';
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Registration />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="cart" element={<Cart />} />
            <Route path=":id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
