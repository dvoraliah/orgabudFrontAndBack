import AuthUser from './AuthUser'
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState , useForceUpdate} from 'react'
export default function MonBudget() {
    const {http } = AuthUser();
    const[userBudgets, setUserBudgets] = useState('');
    const [categories, setCategories] = useState('');
    const [soldeCategory, setSoldeCategory]  = useState('');
    
    

    function render(){
        console.log("myBudgets.js")
        console.log(this.props.categories)
    }
    return (
      <div id="listesCategories">
        <div>
            {render()}
        </div>

        {/* <h4>Catégories</h4>
        <h5>Revenus</h5>
        <Link className="nav-link" to="/DepensesCourantes">
            <h5>Dépenses Courantes</h5>
        </Link> */}
      </div>
    );

}