import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const err404 = () => {
  return (
        <div className = " justify-content-center vh-100">
            <div className = "text-center">
                <h1 className = "display-1 fw-bold">404</h1>
                <p className = "fs3-"> <span className = "text-danger">Opps!</span> Halaman Tidak Ditemukan.</p>
                <p className = "lead">
                   Halaman Yang Anda Cari Tidak Ditemukan.
                  </p>
                <Link to="/dashboard" className = "btn btn-primary">Ke Dashboard</Link>
            </div>
        </div>
  );
};

export default err404;
