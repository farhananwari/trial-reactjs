import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppNavbar from '../navbar/nav-user';
import Eroorz from '../error/404'

const PostIndex = () => {
  const [pegawaiData, setPegawaiData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataPegawai = async () => {
      try {
        const token = localStorage.getItem('token');
    
        const response = await fetch('http://localhost:8080/api/pegawai', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          setPegawaiData(data);
        } else {
          const errorData = await response.json();
          console.error('Error Data:', errorData);
          setError('404 Halaman Tidak Ditemukan');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('Terjadi kesalahan saat mengambil data. Silakan coba lagi.');
      }
    };
    
    getDataPegawai();
  }, []);

  return (
    <div>
     {error === null && <AppNavbar />}
      <div className="container mt-5">
        {error && (
         <Eroorz />
        )}
        {pegawaiData.length > 0 && (
          // Render tampilan data pegawai jika tidak terjadi kesalahan
          <div className="card container mt-5">
            <h3 className='mt-3 fw-bold'>Data Pegawai</h3>
            <table className="table table-bordered" >
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Status Pegawai</th>
                  <th>Gaji</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {pegawaiData.map((pegawai) => (
                  <tr key={pegawai.id}>
                    <td>{pegawai.nama}</td>
                    <td>{pegawai.status_pegawai}</td>
                    <td>{pegawai.gaji}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleDetail(pegawai.id)}
                      > 
                        <FontAwesomeIcon icon="eye" /> Detail
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(pegawai.id)}
                      >
                        <FontAwesomeIcon icon="trash" /> Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostIndex;
