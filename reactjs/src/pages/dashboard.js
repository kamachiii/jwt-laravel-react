import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

export default function Dashboard(){
    const {http} = AuthUser();
    const [userdetail, setUserdetail] = useState();

    useEffect(() =>{
        fetchUserDetail();
    }, []);

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
        });
    }

    function renderElement(){
        if(userdetail){
            return <div className="row justify-content-center mt-5">
                <div className="col-sm-6">
                    <div className="card shadow p-4 container">
                        <h4>Name</h4>
                        <p>{userdetail.name}</p>
                        <h4 className="mt-3">Email</h4>
                        <p>{userdetail.email}</p>
                    </div>
                </div>
            </div>
        }else{
            return <div className="text-center mt-5">
                    <h1>Loading.....</h1>
                </div>;
        }
    }

    return(
        <div>
            {renderElement()}
        </div>
    )

}
