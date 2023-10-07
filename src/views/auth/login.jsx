import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
    
      if (response.ok) {
        // Berhasil login, ambil token dari response
        const data = await response.json();
        const token = data.token;

        localStorage.setItem('token', token);
        
        console.log('Login berhasil!');
        navigate('/dashboard');
      } else {
        // Gagal login, tampilkan pesan kesalahan atau sesuaikan dengan kebutuhan aplikasi
        console.error('Login gagal');
        // Redirect or handle error as needed
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
  };

  return (
    <div className="card container mt-4">
      <h2 className="mt-4 mb-4">Selamat Datang</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mb-4">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
