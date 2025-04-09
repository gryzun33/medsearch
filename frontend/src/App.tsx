import { BrowserRouter, Route, Routes } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import RedirectRoute from './components/RedirectRoute';
import SearchList from './pages/SearchList/SearchList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route element={<AuthLayout />}>
            <Route
              path="login"
              element={
                <RedirectRoute>
                  <Login />
                </RedirectRoute>
              }
            />
            <Route
              path="register"
              element={
                <RedirectRoute>
                  <Registration />
                </RedirectRoute>
              }
            />
          </Route>
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="cart" element={<Cart />} />
          <Route path=":id" element={<Product />} />
          <Route path="search" element={<SearchList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
