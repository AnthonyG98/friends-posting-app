import React, {useEffect} from 'react'
import Header from './Header';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { postActions } from '../store/post-slice';
import { Image } from "cloudinary-react";
import axios from 'axios';

function Dashboard() {
    let url = `http://localhost:3001`;
    const dispatch = useDispatch();
    const userUsername = useSelector((state) => state.auth.username);
    const userProfileImg = useSelector((state) => state.auth.profilePic);
    const userPost = useSelector((state) => state.post.userPost)
    
    const changeProfilePicture = (img) => {
      dispatch(authActions.profileImg(img));
    };
    const changePost = (post) => {
      dispatch(postActions.inputPost(post.data));
      return post.data
    };
    const getUser = () =>{
        axios.get(`${url}/users/${userUsername.payload}`).then(response =>{
          console.log(response.data)
        })
    }
    const onPost = () =>{
      const postData = {
        username: userUsername,
        profile_picture: userProfileImg,
        post: changePost
      }
      // axios.post(`${url}/post`, postData).then(response =>{
      //   console.log(response.data)
      // })
      console.log(postData)
    }
    useEffect(() => {
      getUser();
      console.log(changePost)
    }, 
    [])
    
  return (
    <div className='dashboard-container'>
      <div className='dash-head'>
        <Header />
      </div>
      <div className='dash-input-container'>
      <Image
          className="dashInputImg"
          cloudName="delktfw1a"
          publicId={userProfileImg.payload}
        />
        <input className='dash-open-new' placeholder='START A POST.'/>
      </div>
      <div className='post-container'>
        <div className='post-flex-container'>
          <h1 className='post-head'>POST</h1>
          <textarea className='post-text' onChange={changePost} placeholder="What's on your mind?"></textarea>
          <button className='post-btn' onClick={onPost}>POST</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard