import AuthUser from './AuthUser'

export default function Dashbord(){
    const {user} = AuthUser();
    return (
      <div>
        <h4>Bienvenue {user.name}</h4>
        <p>mail : {user.email}</p>
        
      </div>
    );
}