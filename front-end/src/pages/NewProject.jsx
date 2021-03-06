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
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp, where } from "firebase/firestore";
import firebase from "firebase/app";
import { useLocation } from 'react-router-dom';

const NewProject = () => {
  const [projects, setProjects] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  // const [currentUserImage, setCurrentUserImage] = useState("")
  // const [currentUserEmail, setCurrentUserEmail] = useState("")
  const projectCollectionRef = collection(db, "projects");
  const userCollectionRef = collection(db, "users");
  const [projectTitle, setProjectTitle] = useState("")
  const [projectSummary, setProjectSummary] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [projectCost, setProjectCost] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");

let currentUserImage = "";
let currentUserEmail = "";

  const { user } = useUserAuth();
  const userId = user.uid
  console.log({ userId })

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(query(projectCollectionRef, orderBy("created_at", "desc")))
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProjects();
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(query(userCollectionRef, where("user_id", "==", userId)))
      console.log(data);
      setCurrentUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }
    getUser();

  }, [])

  if(currentUser.length > 0){
    currentUserImage = currentUser[0].image;
    currentUserEmail = currentUser[0].email;

  }

  console.log({currentUserImage})
  console.log({currentUserEmail})




  // const firebase = require('firebase-admin')
  const navigate = useNavigate();



  const handleSubmit = async () => {
   


    const project = { title: projectTitle, summary: projectSummary, duration: projectDuration, total_cost: projectCost, image: projectImage, created_at: serverTimestamp(), user_id: user.uid, user_image: currentUserImage, user_email: currentUserEmail, width: width, length: length }
    await addDoc(projectCollectionRef, project)
    navigate("/timeline")

  }



  return (
    <div>
      <h1> Create New Project</h1>

      <Button startIcon={<CancelIcon />} >
        <Link href="/timeline" variant="body2" >
          {"Cancel"}
        </Link>
      </Button>

      <div className="maincontainernewproject">
        <textarea
          className="project_text_box"
          name="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(event) => setProjectTitle(event.target.value)}
        ></textarea>

        <textarea
          className="project_text_box"
          name="text"
          placeholder="Project Summary"
          value={projectSummary}
          onChange={(event) => setProjectSummary(event.target.value)}
        ></textarea>

        <textarea
          className="project_text_box"
          name="text"
          placeholder="Project Duration"
          value={projectDuration}
          onChange={(event) => setProjectDuration(event.target.value)}
        ></textarea>

        <textarea
          className="project_text_box"
          name="text"
          placeholder="Project Cost"
          value={projectCost}
          onChange={(event) => setProjectCost(event.target.value)}
        ></textarea>

        <textarea
          className="project_text_box"
          name="text"
          placeholder="Project Image"
          value={projectImage}
          onChange={(event) => setProjectImage(event.target.value)}
        ></textarea>

        <textarea
          className="project_text_box"
          name="text"
          placeholder="Project Length"
          value={length}
          onChange={(event) => setLength(event.target.value)}
        ></textarea>

        <textarea
          className="project_text_box"
          name="text"
          placeholder="Project Width"
          value={width}
          onChange={(event) => setWidth(event.target.value)}
        ></textarea>



        <Button
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
          type="submit"
          onClick={handleSubmit}
        >
          Create Post
        </Button>


      </div>

    </div>
  )
}

export default NewProject;