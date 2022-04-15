import { useState } from 'react'
import { useNavigate, useInRouterContext } from "react-router-dom";
import  AuthUser  from "./AuthUser";

export default function Register(){
  const navigate = useNavigate();
    const {http, setToken} = AuthUser(); 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [password_confirmation, setPasswordConfirmation] = useState();
    //const [crsf, setCrsf] = useState();

    const submitForm = () =>{
        console.log("Appel a l'api depuis login.js");
        //api form
        http.post('/register', {name:name, email:email, password:password, password_confirmation:password_confirmation}).then((res)=>{
          navigate('/login')

        })
    }

    return (
      <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
          <div className="card p-4">
            <div className="form-group">
              <div className="form-group">
                <label>Pseudo:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pseudo"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                />
              </div>
              <label>Email address:</label>
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                id="pwd"
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="confirmation password"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                id="password_confirmation"
              />
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" /> Remember
                me
              </label>
            </div>
            <button
              type="submit"
              onClick={submitForm}
              className="btn btn-primary"
            >
              S'enregister
            </button>
          </div>
        </div>
      </div>
    );
}