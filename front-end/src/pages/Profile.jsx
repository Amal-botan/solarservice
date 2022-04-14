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
import { collection, getDocs, query, orderBy, where, doc } from "firebase/firestore";
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
      setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getProjects(); 
  }, [])


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(query(usercollectionRef, where("user_id", "==", userId)))
      console.log(data); 
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers(); 
  }, [])


  const handleImageSubmit = () => {
    setNewImageDisplay(true)
  }
  const updateProject = async (id) => {
    console.log("Project update", id) 
  }

  console.log({users})
const currentUser = users[0];

console.log(currentUser)

  return users.map((currentUser) => (
    <div className="profilemaincontainer">
      <div className="userinfomaincontainer">
        {currentUser && <div> Email: {currentUser.email} </div>}
        {currentUser.image ?
        <Avatar
        alt="Remy Sharp"
        src={currentUser.image}
        sx={{ width: 100, height: 100 }}
      />
      
          : 
        
        <div>
       {newImageDisplay ? <AddNewImage setNewImageDisplay={setNewImageDisplay}/> : <Button startIcon={<AddCircleIcon />} onClick={handleImageSubmit}>
         {"Add Image"}
          </Button> 
          }
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