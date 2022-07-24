import './navigation.styles.scss'
import { Outlet, Link } from "react-router-dom";
 const Navigation= ()=>{
    return (
        <>
        <div className="nav-bar">
            <div className="siteTitle">
            <p className='company-name'><Link to="/">Cloudegic IT Solutions</Link></p>
            <p className='company-desc'><Link to="/">Login Page Design Task</Link></p>
            </div>
            <div className="nav-links">
                <ul>
                    <li className='nav-home'><Link to="/">Home</Link></li>
                    <li className='nav-login'><Link to="login">Login</Link></li>
                </ul>
            </div>
        </div>
        <Outlet/>
        </>
    )
} 

export default Navigation