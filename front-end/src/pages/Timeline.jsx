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
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Link from '@mui/material/Link';




const Timeline = () => {
  const [projects, setProjects] = useState([]); 
  const projectCollectionRef = collection(db, "projects");
  const [newProject, setNewProject] = useState(false);


  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  console.log("user", user)

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
      const data = await getDocs(query(projectCollectionRef, orderBy("created_at", "desc")))
      setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getProjects(); 
  }, [])

  console.log("projects", projects)
  return (
    <div className="maincontainertimeline">
      <div>
        {user && <div> Current user is: {user.email} </div>}

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
        <ProjectsDisplay projects={projects} />
      </div>

      </div>

      <div>
        Contacts Online
      </div>




    </div>
  )
}

export default Timeline;