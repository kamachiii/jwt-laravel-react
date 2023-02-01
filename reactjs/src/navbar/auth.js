import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import AuthUser from '../pages/AuthUser';

function Auth() {
  const {token, logout} = AuthUser();
  const logoutUser = () =>{
    if(token != undefined){
      logout();
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand ms-3"><h3>JRL</h3></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default Auth;
