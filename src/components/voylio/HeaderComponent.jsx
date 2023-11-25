import {Link} from "react-router-dom";
import logo from '../../images/octrone.jpg';
import { useAuth } from "./security/AuthContext";
import {animateNavbar} from "./animation/Animation";
import { useEffect } from "react";

export default function HeaderComponent() {
  const authContext = useAuth()
  const isAuthenticated = authContext.isAuthenticated

  useEffect(() => {
    animateNavbar();
  },[]);

  function logout() {
    authContext.logout()
  }

    return (
      <div className="custom-header-container">
        <ul className="custom-navbar-nav">
          <li className="custom-nav-item">
            <Link className="custom-nav-link" to="#">
              <img src={logo} alt="Voylio Logo" />
            </Link>
          </li>
  
          <li className="custom-nav-item">
            {isAuthenticated && 
                <Link className="custom-nav-link" to="/welcome/suraj">Home</Link> }        
          </li>
          <li className="custom-nav-item">
           {isAuthenticated && 
                <Link className="custom-nav-link" to="/loginhistory">History</Link> } 
          </li>        
          <li className="custom-nav-item">
            {!isAuthenticated && 
                <Link className="custom-nav-link" to="/">Login</Link>}            
          </li>

          <li className="custom-nav-item">
            {isAuthenticated && 
                <Link className="custom-nav-link" to="/logout" onClick={logout}>Logout</Link>}          
          </li>
        </ul>
      </div>
    );
  }