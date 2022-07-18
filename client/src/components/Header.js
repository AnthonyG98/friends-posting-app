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
            <i class="fas fa-user-friends"></i>
        </div>
        <Image
          className="searchImg"
          cloudName="delktfw1a"
          publicId={userProfileImg.payload}
        />
    </nav>
  )
}

export default Header