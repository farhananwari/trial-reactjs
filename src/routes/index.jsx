//import react router dom
import { Routes, Route } from "react-router-dom";

//import view homepage


//import view posts index
import PostIndex from '../views/posts/index.jsx';

//import view post create
import PostCreate from '../views/posts/create.jsx';

//import view post edit
import PostEdit from '../views/posts/edit.jsx';

import Dashboard from '../views/dashboard.jsx';

import Error from '../views/error/404.jsx'


function RoutesIndex() {
    
    return (
        <Routes>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/posts" element={<PostIndex />} />
            <Route path="/posts/create" element={<PostCreate />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
        </Routes>
        
    )
}

export default RoutesIndex
