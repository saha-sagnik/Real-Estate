import '../Navbar/Navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {

  // Temporarily hard-code for debugging
//const dummyUser = { username: "madhuri", avatar: "/noavatar.jpeg" };


  const {currentUser} = useContext(AuthContext);
  //console.log("Current User in Navbar:", currentUser);


  const [open, setopen] = useState(false)
  const user = currentUser?.message?.userInfo;
  return (
   <nav>
    <div className="left">
      <a href="/" className='logo'>
        <img src="/logo.png" alt="" />
        <span>PrimeEstate</span>
      </a>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">Agents</a>
     
    </div>
    <div className="right">
      {currentUser ? (<div className='user'>
        <img 
        src={currentUser.avatar || "/noavatar.png"}
        alt="" />
          <span>{user.username}</span>
        <Link to="/profile" className='profile'>
          <div className="notification">
            3
          </div>
          <span>Profile</span>
        </Link>
      </div>) 
      : 
      (<><a href="/login">SignIn</a>
      <a href="/register" className='register'>
        SignUp
        </a></>)}
      <div className="menuIcon">
        <img src="/menu.png" alt="" onClick={()=>
        setopen(!open)
        } />
      </div>
      <div className={open ? "menu active" : "menu"}>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">Agents</a>
      <a href="">SignIn</a>
      <a href="">SignUp</a>
      </div>
    </div>
  
   </nav>
  )
}

export default Navbar