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






const Timeline = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

  return (
    <div className="maincontainer">
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
          <IconButton aria-label="settings">
           <AddCircleIcon /> New Project 
          </IconButton>
        </div>


        <div>
          <Card sx={{ minWidth: 600, maxWidth: 600 }}>
            <div className="cardheader">
              <CardHeader
                avatar={
                  <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                }

                title="Project title"
                subheader="created-at timestamp"
              />
              <div className="editdeletebtns">
                <IconButton aria-label="settings">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="settings">
                  <DeleteIcon />
                </IconButton>
              </div>

            </div>

            <CardMedia
              component="img"
              height="194"
              image="https://empoweredstartups.com/wp-content/uploads/2021/06/square-solar-back-hr.png"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This is a project summary
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
      </div>

      <div>
        Contacts Online
      </div>




    </div>
  )
}

export default Timeline;