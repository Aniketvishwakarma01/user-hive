import React, { Fragment } from 'react'
import style from "./navbar.module.css";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
  let userID = sessionStorage.getItem("userID");
  let adminID = sessionStorage.getItem("adminID");
  let navigate = useNavigate();
  let logout=()=>{
    if(adminID){
      sessionStorage.removeItem("adminID");
      toast.success("logged out successfully");
    navigate("/");
    }else{
      sessionStorage.removeItem("userID");
      toast.success("logged out successfully");
      navigate("/");
  }
}
  
  return (
   <nav id={style.nav}>
    <figure> <img src="/hive.png" alg="hive-logo" title='hive'/></figure>
   
      <ul>
        <li><Link to="/">Home</Link></li>
        {adminID || userID ? (
          <Fragment>
            <li><Link to={adminID ? "/admin":"/profile"}>Profile</Link></li>
            
            <li className="primary-btn" onClick={logout}>logout</li>
          </Fragment>
        ):(
          <Fragment>
             <li className='primary-btn'>
              <Link to = "/login">Login</Link>
              </li> 

              <li className='secondary-btn'>
                <Link to ="/signup">Signup</Link>
                </li>

             

          </Fragment>
        )}
       
        
      </ul>
    
   </nav>
  )
}

export default Navbar
