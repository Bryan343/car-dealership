import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'styles/styles.css';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Admin from 'pages/admin/Index';
import PublicLayout from 'layouts/PublicLayout';
import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import Customers from 'pages/admin/Customers';
import Vehicles from 'pages/admin/Vehicles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Index />} />
        </Route>
        <Route path="/user" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" index element={<Register />} />
        </Route>
        <Route path="/admin" element={<PrivateLayout />}>
          <Route index element={<Admin />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="customers" element={<Customers />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
