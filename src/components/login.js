import { useState } from 'react'
import  AuthUser  from "../components/AuthUser";

export default function Login(){
    const {http} = AuthUser(); 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () =>{
        console.log("Appel a l'api depuis login.js");
        //api form
        http.post('/login', {email:email, password:password}).then((res)=>{
          console.log(res.data);
        })
    }

    return (
      <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
          <div className="card p-4">
            <div className="form-group">
              <label>Email address:</label>
              <input
                type="email"
                className="form-control"
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
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit" onClick={submitForm} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
}