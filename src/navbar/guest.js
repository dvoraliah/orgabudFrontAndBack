import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/login";
import Register from "../components/register";
function Guest() {

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
              <Link className="nav-link" to="/login">
                Se connecter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                S'enregistrer
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </>
    );
}

export default Guest;
