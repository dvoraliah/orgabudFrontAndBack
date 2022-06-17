import AuthUser from './AuthUser'
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState , useForceUpdate} from 'react'
export default function MonBudget() {
    const {http } = AuthUser();
    const[userBudgets, setUserBudgets] = useState('');
    const [categories, setCategories] = useState('');
    const [soldeCategory, setSoldeCategory]  = useState('');

    useEffect(() => {
        fetchCategories();
    }, [])



    /*Acceder aux catégories des budgets*/
    const fetchCategories = () => {
        http.get('/categories/').then((res) => {
            setCategories(res.data); 
        })
        
    }
    




    const listCategories = categories.slice()
    const listBudgets = userBudgets.slice()

    function CategoriesList(props, budgets){
        const cate = props.slice();
        const listItems = cate && cate.map((categ) => 
            <Link className="nav-link" to={categ.slug}>
                <li className="categoryName" key={categ.slug}>{categ.name} 
                </li>
            </Link>
        );
        return <ul>{listItems}</ul>
    }

    function renderElement() {
        if (userBudgets) {
const cat = categories.slice()
            return <div id="countsByCategory">
                <h4>Etats des comptes </h4>
                {CategoriesList(listCategories, listBudgets) }
                
            </div>

            
        } else {
            return <p>Chargement</p>
        }
    }

    return (
        <div>
            {renderElement()}
        </div>
    )
}