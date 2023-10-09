import React from 'react';

const err404 = () => {
  const token = localStorage.getItem('token');

  return (
    <div className="justify-content-center vh-100 mt-5">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs3-">
          <span className="text-danger">Opps!</span> Halaman Tidak Ditemukan.
        </p>
        <p className="lead">Halaman Yang Anda Cari Tidak Ditemukan.</p>
        
        {/* Ternary operator untuk menentukan tampilan tombol */}
      </div>
    </div>
  );
};

export default err404;
