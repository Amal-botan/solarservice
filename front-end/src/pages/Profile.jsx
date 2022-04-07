import * as React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import '../pages/Timeline.css';
import ProjectsDisplay from '../components/ProjectsDisplay.jsx';
import { useEffect, useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { db } from '../firebase'; 
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import Link from '@mui/material/Link';




const Profile = () => {
  const [projects, setProjects] = useState([]); 
  const projectCollectionRef = collection(db, "projects");
  const [newProject, setNewProject] = useState(false);


  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const userId = user.uid

  const handleSubmit = async () => {
    try {
      await logOut()
      navigate("/login")

    } catch (err) {
      console.log(err.message)
    }
  }

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

  const updateProject = async (id) => {
    console.log("Project update", id) 
  }


  return (
    <div className="profilemaincontainer">
      <div>
        {user && <div> Current user is: {user.email} your id is {user.uid} </div>}

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Logout

          </Button>
        </Box>

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
        <ProjectsDisplay user={user} setProjects={setProjects} projectCollectionRef={projectCollectionRef} projects={projects} updateProject={updateProject} />
      </div>

      </div>



    </div>
  )
}

export default Profile;