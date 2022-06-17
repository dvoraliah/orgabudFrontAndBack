import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import Dashboard from "../components/dashboard";
import AuthUser from "../components/AuthUser";
import MyBudget from "../components/myBudget"
import Current from "../components/depensesCourantes";
function Auth() {
    const { token, logout } = AuthUser();
    const logoutUser = () => 
    {
        
        if(token !== undefined){
            logout();
        }
    }
    const categoriesDefault = [
      {
        id: 1,
        name: "Revenus --Dur--",
        slug: "revenus-dur",
        created_at: "2022-04-15 09:55:43",
        updated_at: "2022-04-15 09:55:43",
      },
      {
        id: 2,
        name: "Prélèvements Courants --Dur--",
        slug: "prelevements-courants-dur",
        created_at: "2022-04-15 09:55:43",
        updated_at: "2022-04-15 09:55:43",
      },
      {
        id: 3,
        name: "Dépenses Courantes --Dur--",
        slug: "depenses-courantes-dur",
        created_at: "2022-04-15 09:55:43",
        updated_at: "2022-04-15 09:55:43",
      },
      {
        id: 4,
        name: "Epargnes --Dur--",
        slug: "epargnes-dur",
        created_at: "2022-04-15 09:55:43",
        updated_at: "2022-04-15 09:55:43",
      },
      {
        id: 5,
        name: "Divers --Dur--",
        slug: "diver-dur",
        created_at: "2022-04-15 09:55:43",
        updated_at: "2022-04-15 09:55:43",
      },
      {
        id: 6,
        name: "Résumé --Dur--",
        slug: "resume-dur",
        created_at: "2022-04-15 09:55:43",
        updated_at: "2022-04-15 09:55:43",
      },
    ];

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
            <li>
              <Link className="nav-link" to="/myBudget">
                Mon Budget
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
            <Route path="/myBudget/*" element={<MyBudget categories={categoriesDefault}/>} />
            <Route path="/DepensesCourantes" element={<Current />} />
          </Routes>
        </div>
      </>
    );
}

export default Auth;
