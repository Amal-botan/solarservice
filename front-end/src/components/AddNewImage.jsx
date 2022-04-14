import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';
import SendIcon from '@mui/material/Link';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState, useEffect } from "react";
import '../pages/NewProject.css';
import { db } from '../firebase';
import { collection, addDoc, getDocs, query, orderBy, serverTimestausmp, where, updateDoc, doc } from "firebase/firestore";
import firebase from "firebase/app";
import { useLocation } from 'react-router-dom';

const AddNewImage = (props) => {
  const { setNewImageDisplay } = props;
  const [userImage, setUserImage] = useState("")
  const userCollectionRef = collection(db, "users");
const [userInfo, setUserInfo] = useState({});

  const { user } = useUserAuth();


  const handleCancleSubmit = () => {
    setNewImageDisplay(false)
  }

  const userId = user.uid;



  const handleSubmit = async () => {
    const userDoc = doc(db, "users", userId)
    await updateDoc(userDoc, {image: userImage})
    setNewImageDisplay(false)
  }



  return (
    <div>
      
      <textarea
        className="project_text_box"
        name="text"
        placeholder="Project Image"
        value={userImage}
        onChange={(event) => setUserImage(event.target.value)}
      ></textarea>

      <Button
        variant="contained"
        size="small"
        endIcon={<SendIcon />}
        type="submit"
        onClick={handleSubmit}
      >
        Add Image
      </Button>


      <Button startIcon={<CancelIcon />} onClick={handleCancleSubmit}>
        {"Cancel"}
      </Button>  </div>

  )
}

export default AddNewImage;