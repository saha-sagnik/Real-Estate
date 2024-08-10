import React, { useContext } from 'react'
import './profileUpdate.scss';
import { useState } from 'react';;
import { AuthContext } from '../../context/AuthContext';

function ProfileUpdatePage() {

const {currentUser,updateUser} = useContext(AuthContext);

const user = currentUser?.message?.userInfo;

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit="">
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={user.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={user.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {/* <span>error</span> */}
        </form>
      </div>
      <div className="sideContainer">
        <img src={ user.avatar || "/noavatar.png"} alt="" className="avatar" />
      
      </div>
    </div>
  )
}

export default ProfileUpdatePage