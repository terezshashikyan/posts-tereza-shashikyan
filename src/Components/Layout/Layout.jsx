import {Link, Outlet} from 'react-router-dom';
import React from 'react';
import './styles.css';



function Layout() {
    return(
 <>

     <div className="header">
        <div><Link to={"/"}><h2>Home</h2></Link> </div>
        <div><Link to={"/posts"}><h2>Posts</h2></Link> </div>
        <div><Link to={"/savedposts"}><h2>Saved Posts</h2></Link></div>
     </div>
     <div className="outlet">
     <Outlet/>
     </div>
     <div className="footer">
        All Rights Reserved
     </div>

 </>
 );
}


export default Layout;