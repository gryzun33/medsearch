import { BrowserRouter, Route, Routes } from 'react-router';
import ProtectedRoute from './components/shared/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import RedirectRoute from './components/shared/RedirectRoute';
import SearchPage from './pages/SearchPage';
import Pharmacies from './pages/Pharmacies';

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
          <Route path="medicine/:id/pharmacies" element={<Pharmacies />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
