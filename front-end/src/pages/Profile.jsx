import * as React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import '../pages/Timeline.css';
import '../pages/Profile.css';
import Avatar from '@mui/material/Avatar';

import ProjectsDisplay from '../components/ProjectsDisplay.jsx';
import AddNewImage from '../components/AddNewImage.jsx';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy, where, doc, updateDoc } from "firebase/firestore";
import Link from '@mui/material/Link';



const Profile = () => {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const projectCollectionRef = collection(db, "projects");
  const usercollectionRef = collection(db, "users");

  const [newProject, setNewProject] = useState(false);
  const [newImage, setNewImage] = useState("")
  const [newImageDisplay, setNewImageDisplay] = useState(false)

  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const userId = user.uid


  const handleAddProject = () => {
    console.log("Add project")
    setNewProject(true);
  }

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(query(projectCollectionRef, where("user_id", "==", userId), orderBy("created_at", "desc")))
      console.log(data);
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProjects();
  }, [])


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(query(usercollectionRef, where("user_id", "==", userId)))
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers();
  }, [])


  const handleImageSubmit = () => {
    setNewImageDisplay(true)
  }

  const updateProject = async (id) => {
    console.log("Project update", id)
  }

  const handleImageDeleteSubmit = async () => {
      const userDoc = doc(db, "users", userId)
      await updateDoc(userDoc, {image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX////f39/d3d38/Pzh4eHs7Ozy8vL4+Pj19fXq6urk5OTv7+/m5ubr6+v29/bn6Of+ydA3AAAEWElEQVR4nO2d2XLDIAxFbcDGW5r//9vGbdM2xU4EKha+6Dx0pm/kjJBYDDSNoiiKoiiKoiiKoiiKoiiKoiiKoiiKohyOtbbv/e2vlW5JGdh5HifTrhjjxrnz0i2Sxi/OfAr54vafc3Nfrxi7tA9CfomZbn1JunkSeLcl5FvMch2kW3g4/WaMPITLMtcVLM+j5Jteup1HspCU3LpQPfl2eNVzfqzM0m09igvZSWuulWQVspFViqtAivfXGCdt6+CTymDoHecuBTxShlghFUiZUpxgS6FX4QegS3Jkev0Bd0jr08JkjRTY3pPupB2l254L4jxnE9RRSlrV+QQ1zXKcOOnG5yGxEn9iMFfeZpYTzHLM6TqonYcTJqgDfJYSTCdenQR0vL7TIhYeVtkBnRxznXTSPyADI0sJpBNL2/yrywkzxaoTdaJOEp0g1mLeFBBzzHbhKYEc2zPHbJBOmPMdSCc9S0nbSrc/C6yBLGIpbphrSqDrsaxJIKgT1l4G6kYgZ9Q2STc+D6zVAgfZd+zE6juQ8x3uGjXiNyjMsb06USc01EkQJoifb3FzLGCYcONkkW5/Dnh76KDfKWmYhLDC5E269XmION8VMCFm2Ia3VnCVbnwmOPNiVCeMagy6GnvDJocJ4lzni6SjbyuwYdKk74/ihkmTuPGFOji5Y8foRIt/bUHsdyj4Z66b2K0v0L2uP8Sto6gTdaJO7kSW4xpSbOQ6ShVlJ7LwgO6d/+XlTWQPcSLd2mOIWqyuIsU2UZ0HdLk+hHhn3Qd1pNgmIlCqCZOIu2Fgl2FDqHEC+W3SDguxGuMuTYeQnWichNQyOmnolwhBnsXYgZpja3LSqZMA8m66dEMPhLwfKN3QAyHPjKUbeiDqJITqpKYcS90LVCcb1LNUQHZS0xyQHCeI39jvQN72qmMXsFkPwVGVrKsFVaTZuE9CjevxrfjYE7XGXaCt2Jm8nPTbihlRrdjZbT/iRbACuZfuB+d4h5qmAertM+vH+LdDwmAx04BiZeiYEfLby4hQnIfkJLJj5exHvvzMvOVx04q7nDfh2vkfssi2lus5rdguQ4z8WFnOt47g+/9LrDtWxnNZseP/JtYdK9N5rLztPDqbxcopSnOfMqVJZ+qKtzLwbghKwExFrybYjnshapoVN5Vamm32UvOEIntQ3uHIa8orzf0sGCNfUsy1pBXtW6eRNvKBKeVmu7T1xEyYpYQXj+U7zV+k063l3hyVAel3oDn3vGREUgr7HrpMCEYK962UbAjuM8ffPXAUcgc6RGY3NKQ6D+Pt3dyYizoJkDpvyruIPC9STjhvNOdGqhqXWolXhKpxsaOTFXUSIuTkTfp3P0PISdRdDEejTkLUSYg62UDms/SyncgMZAtdY7sjMpAteWgvNbiX/tXPUScbSGyrFz20b2XOzZXuRGKAok7O50TkPpmynYjcsZN8MfsxiJzDLXD3/AGJowqlO5EYtHXGlQzjeZp3TSc+LoSs340AAAAASUVORK5CYII="})
      setNewImageDisplay(false)
      
    }

    // useEffect(() => {
    //   const getUsers = async () => {
    //     const data = await getDocs(query(usercollectionRef, where("user_id", "==", userId)))
    //     console.log(data);
    //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    //   }
    //   getUsers();
    // }, [])
  
  

  const currentUser = users[0];

  console.log(currentUser)

  return users.map((currentUser) => (
    <div className="profilemaincontainer">
      <div className="userinfomaincontainer">
        {currentUser && <div> Email: {currentUser.email} </div>}
        {
          <Avatar
            alt="Remy Sharp"
            src={currentUser.image}
            sx={{ width: 100, height: 100 }}
          />}




        {newImageDisplay ? <AddNewImage setNewImageDisplay={setNewImageDisplay} /> : <div> <Button startIcon={<EditIcon />} onClick={handleImageSubmit}>
          {"Edit Image"}
        </Button>

          <Button startIcon={<DeleteIcon />} onClick={handleImageDeleteSubmit}>
            {"Delete Image"}
          </Button>
        </div>
        }




      </div>

      <div>
        <div>
          <Button startIcon={<AddCircleIcon />} >
            <Link href="/newproject" variant="body2" >
              {"New Project"}
            </Link>
          </Button>

        </div>

        <div>
          <ProjectsDisplay user={user} users={users} setProjects={setProjects} projectCollectionRef={projectCollectionRef} projects={projects} updateProject={updateProject} />
        </div>

      </div>



    </div>
  ))
}

export default Profile;