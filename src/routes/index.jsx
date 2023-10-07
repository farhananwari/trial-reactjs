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


function RoutesIndex() {
    
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* route "/posts" */}
            <Route path="/posts" element={<PostIndex />} />

            {/* route "/posts/create" */}
            <Route path="/posts/create" element={<PostCreate />} />

            {/* route "/posts/edit/:id" */}
            <Route path="/posts/edit/:id" element={<PostEdit />} />

        </Routes>
        
    )
}

export default RoutesIndex
