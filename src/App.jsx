//import Link from react router dom
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//import routes
import Pegawai from './routes/index';
import Auth from './routes/auth';
import LoginForm from '../src/views/auth/login';
import Dashboard from '../src/views/dashboard';

import './fontawesome'

export default function App() {
  const token = localStorage.getItem('token');
  return (
    <>
      <Routes>
      <Route
        path="/"
        element={token ? <Dashboard /> : <LoginForm />}
        />
      </Routes>
      <Auth />
      <Pegawai />
    </>
  )
  
}
