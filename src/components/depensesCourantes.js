import AuthUser from './AuthUser'
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState, useForceUpdate } from 'react'
export default function Current() {
    const { http } = AuthUser();
    const [currentFields, setcurrentFields] = useState('');

    useEffect(() => {
        fetchcurrentFields();
    }, [])

    const fetchcurrentFields = () => {
        /* Acceder aux budgets de l'utilisateur connecté */
        http.get('/budgets/filter/depenses-courantes').then((res) => {
            setcurrentFields(res.data);
            // console.log(res.data);
        })
    }

    // console.log(currentFields)

    function detailCurrent(){
        
        const fieldsDetails = currentFields.field;
        console.log(currentFields);
        // if(fieldsDetails){
        // const details = fieldsDetails.slice()
        //     const listDetails = details && details.map((element) => 
        //     <div id="Champs">
        //             <li>{element.name}</li>
        //     </div>
        //     );
        //     return <ul>{listDetails}</ul>
        return (
            <div style={{border:"solid 3px red"}}>
                <div style={{border:"solid 2px blue"}}>
                    Depense courante
                </div>
                <div style={{border:"solid 2px green"}}>

                </div>
            </div>
        );
        // }
       
    }
    function renderElement() {
            return <div>
                <h4>Champs</h4>
               <ul>{detailCurrent()}</ul>
            </div>
        
    }

    return (
        <div>

            {renderElement()}
        </div>
    )
}