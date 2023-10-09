import AppNavbar from './navbar/nav-user';  // Sesuaikan path sesuai struktur proyek Anda
import { useNavigate } from 'react-router-dom';
import Eroorz from '../views/error/404'

export default function Dashboard() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const permission = localStorage.getItem('permission');
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/logout', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${token}`, 
                },
            });
            if (response.ok) {
                localStorage.removeItem('token');
                navigate('/login');
                delete window.token;
                console.log('Logout berhasil');
            } else {
                console.error('Logout gagal');
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };

    return (
        <div>
            {token ? (
                <>
                    <AppNavbar />
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Dashboard</h1>
                            <p className="col-md-8 fs-4">Selamat Datang!</p>
                            <button className="btn btn-danger" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <Eroorz />
            )}
        </div>
    );
}
