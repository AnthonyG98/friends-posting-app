import React, { useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { Image } from "cloudinary-react";
import axios from 'axios';

function Header() {
  let url = `http://localhost:3001`;
  const dispatch = useDispatch();
  const userUsername = useSelector((state) => state.auth.username);
  const userProfileImg = useSelector((state) => state.auth.profilePic);
  
  const changeProfilePicture = (img) => {
    dispatch(authActions.profileImg(img));
  };
  const getUser = () =>{
      axios.get(`${url}/users/${userUsername.payload}`).then(response =>{
        changeProfilePicture(response.data.profile_picture);
      })
  }
  useEffect(() => {
    getUser()
  }, 
  [])
  return (
    <nav className='nav-container'>
        <div className='nav-components'>
          <div className='nav-icon'>
            <i class="fas fa-user-friends"></i>
          </div>
            <i class="fas fa-search"></i>
            <input type="text" className='search-bar'/>
            <h1 className='dash-head'>DASHBOARD</h1>
        </div>
        <Image
          className="dashImg"
          cloudName="delktfw1a"
          publicId={userProfileImg.payload}
        />
    </nav>
  )
}

export default Header