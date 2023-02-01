import { useState } from "react";
import AuthUser from './AuthUser';

export default function Login(){
    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/login', {email:email, password:password}).then((res)=>{
            setToken(res.data.user, res.data.access_token);
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
                        <label>Email Address</label>
                        <input type="email" id="email" className="form-control"
                        onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label>Password</label>
                        <input type="password" id="password" className="form-control"
                        onChange={e=>setPassword(e.target.value)} />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    )
}
