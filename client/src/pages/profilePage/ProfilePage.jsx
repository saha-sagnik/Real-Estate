import './profilePage.scss'
import List from '../../components/list/List';
import Chat from '../../components/Chat/Chat';
import apiRequest from '../../lib/apiRequest';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


function profilePage() {

  const {updateUser,currentUser } = useContext(AuthContext);

  const navigate = useNavigate();


  const handleLogout = async()=>{
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null)
      localStorage.removeItem("user")
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  const user = currentUser?.message?.userInfo;

  return (  
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
            <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={user .avatar || "noavatar.png"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{user .username}</b>
            </span>
            <span>
              E-mail: <b>{user .email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List/>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )

}

export default profilePage