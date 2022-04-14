import * as React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import '../pages/Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from '@mui/material/Link';
import { db } from '../firebase'; 
import { collection, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const ProjectsDisplay = (props) => {
  const { projects, updateProject, projectCollectionRef, setProjects, user, users } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [editDisplay, setEditDisplay] = useState(false);
  const navigate = useNavigate();
  
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleEdit = (id) => {
    if(!editDisplay) {
    setEditDisplay(true); 
    navigate('/editproject',{state: {id: id, projects: projects}});
    } else {
      setEditDisplay(false);  
    }

  }

  const handleDelete = async (id) => {
    console.log("id", id)
    const projDoc = doc(db, "projects", id);
    await deleteDoc(projDoc); 
    const getProjects = async () => {
      const data = await getDocs(query(projectCollectionRef, orderBy("created_at", "desc")))
      setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getProjects(); 
  }


  return projects.map((project) => (

    <div className="projectpost">

      <Card sx={{ minWidth: 600, maxWidth: 600 }}>
        <div className="cardheader">
          <CardHeader
            avatar={
              <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            }

            title={project.title}
            subheader={project.create_at ? project.created_at : <div></div>} //need to fix created at
          />
          
         {user.uid === project.user_id && <div className="editdeletebtns">
            <IconButton aria-label="edit" onClick={() => handleEdit(project.id)}>
              <EditIcon />
              {/* <Link to={{ pathne: "/newproject", state: project.id }} variant="body2" >
                
              </Link> */}
            </IconButton>

            <IconButton aria-label="delete" onClick={() => handleDelete(project.id)}>
              <DeleteIcon />
            </IconButton>

          </div>}

        </div>

       {project.image && <CardMedia
          component="img"
          height="194"
          image={project.image ? project.image : "data:image/jpeg;base64,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" }
          // alt="Paella dish"
        />}

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Summary: {project.summary}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cost: {project.total_cost}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Duration: {project.duration} hours
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <IconButton aria-label="settings">
              <CommentIcon />
            </IconButton>
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            Comments
          </CardContent>
        </Collapse>
      </Card>

    </div>
  ));
}

export default ProjectsDisplay;