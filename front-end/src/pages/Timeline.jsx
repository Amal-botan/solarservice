import * as React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import '../pages/Timeline.css';
import ProjectsDisplay from '../components/ProjectsDisplay.jsx';
import UserTimeline from '../components/User.jsx';
import { useEffect, useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { db } from '../firebase'; 
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Link from '@mui/material/Link';




const Timeline = () => {
  const [projects, setProjects] = useState([]); 
  const [users, setUsers] = useState([]); 
  const projectCollectionRef = collection(db, "projects");
  const userCollectionRef = collection(db, "users");

  const [newProject, setNewProject] = useState(false);


  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();


  const handleSubmit = async () => {
    try {
      await logOut()
      navigate("/login")

    } catch (err) {
      console.log(err.message)
    }
  }

  const handleAddProject = () => {
    setNewProject(true);
  }

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(query(projectCollectionRef, orderBy("created_at", "desc")))
      setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getProjects(); 
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers(); 
  }, [])

  const updateProject = async (id) => {
    console.log("Project update", id) 
  }


  return (
    <div className="maincontainertimeline">
      <div>
        <UserTimeline/>

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
        <ProjectsDisplay users={users} user={user} setProjects={setProjects} projectCollectionRef={projectCollectionRef} projects={projects} updateProject={updateProject} />
      </div>

      </div>

      <div>
        Contacts Online
      </div>


    </div>
  )
}

export default Timeline;