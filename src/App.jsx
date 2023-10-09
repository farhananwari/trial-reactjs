//import Link from react router dom
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

//import routes
import Pegawai from './routes/index';
import Auth from './routes/auth';
import LoginForm from '../src/views/auth/login';
import Dashboard from '../src/views/dashboard';
import Errorz from '../src/views/error/404'

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
      <Routes>
        <Route path="/*" elemen={< Errorz/>} />
      </Routes>
    </>
  )
  
}
