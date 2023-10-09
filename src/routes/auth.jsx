//import react router dom
import { Routes, Route, Navigate } from "react-router-dom";

//import view posts index


//import view post create
import RegisterForm from '../views/auth/register.jsx';
import LoginForm from "../views/auth/login.jsx";
import Error from "../views/error/404.jsx"


function RoutesIndex() {
    return (
        <Routes>
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
        </Routes>

    )
}

export default RoutesIndex