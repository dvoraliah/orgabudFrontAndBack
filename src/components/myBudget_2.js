import AuthUser from './AuthUser'
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState , useForceUpdate} from 'react'
export default function MonBudget() {
    const {http } = AuthUser();
    const[userBudgets, setUserBudgets] = useState('');
    const [categories, setCategories] = useState('');
    const [soldeCategory, setSoldeCategory]  = useState('');



    return <div id="listesCategories">
        <h4>Catégories</h4>
        <h5>Revenus</h5>
        <Link className="nav-link" to="/DepensesCourantes">
            <h5>Dépenses Courantes</h5>
        </Link>

    </div>

}