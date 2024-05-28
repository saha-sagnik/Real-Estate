import '../Navbar/Navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom';


function Navbar() {

  const [open, setopen] = useState(false)
  const user = true;
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
      {user ? (<div className='user'>
        <img 
        src="/user.jpg" 
        alt="" />
        <span>Sagnik Saha</span>
        <Link to="/profile" className='profile'>
          <div className="notification">
            3
          </div>
          <span>Profile</span>
        </Link>
      </div>) 
      : 
      (<><a href="/">SignIn</a>
      <a href="/" className='register'>
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