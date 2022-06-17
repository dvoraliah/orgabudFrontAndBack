import AuthUser from './AuthUser'
import { useEffect, useState } from 'react'

export default function Dashbord(){
    const {user,http} = AuthUser();
    const [userdetail, setUserdetail] = useState('');

    useEffect(() => {
      fetchUserDetail();
    }, [])

    const fetchUserDetail = () => {
      http.get('/users/'+user.id).then((res)=>{
        setUserdetail(res.data)
      })
    }

    function renderElement(){
      if(userdetail){
        return <div>
          <h4>Bienvenue {userdetail.name}</h4>
          <p>mail : {userdetail.email}</p>
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