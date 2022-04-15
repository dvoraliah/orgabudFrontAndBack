import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import Dashboard from "../components/dashboard";
import AuthUser from "../components/AuthUser";
function Auth() {
    const { token, logout } = AuthUser();
    const logoutUser = () => 
    {
        
        if(token !== undefined){
            logout();
        }
    }

    return (
      <>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Tableau de bord
              </Link>
            </li>
            <li className="nav-item">
              <span role="button" className="nav-link" onClick={logoutUser}>
                Déconnexion
              </span>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </>
    );
}

export default Auth;
