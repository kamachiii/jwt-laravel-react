import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from './AuthUser';

export default function Register(){
    const {http, setToken} = AuthUser();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const submitForm = () =>{
        // api call
        http.post('/register', {name:name,email:email, password:password}).then((res)=>{
            navigate('/login');
        });
    }
    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card shadow mt-3 p-4">
                    <div className="text-center">
                        <h3>Login</h3>
                    </div>
                    <div className="form-group mb-3">
                        <label>Username</label>
                        <input type="text" id="name" className="form-control"
                        onChange={e=>setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Email Address</label>
                        <input type="email" id="email" className="form-control"
                        onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Password</label>
                        <input type="password" id="password" className="form-control"
                        onChange={e=>setPassword(e.target.value)} />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    )
}
