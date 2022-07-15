import React, {useEffect} from 'react'
import Header from './Header';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { Image } from "cloudinary-react";
import axios from 'axios';

function Dashboard() {
    let url = `http://localhost:3001`;
    const dispatch = useDispatch();
    const userUsername = useSelector((state) => state.auth.username);
    const getUser = () =>{
        axios.get(`${url}/users/${userUsername.payload}`).then(response =>{
            console.log(response);
        })
    }
    useEffect(() => {
      getUser()
    }, [])
    
  return (
    <div className='dashboard-container'>
        <Header />
        <div>Dashboard</div>
        <Image
          className="searchImg"
          cloudName="delktfw1a"
        //   publicId={senderProfileImage}
        />
    </div>
  )
}

export default Dashboard