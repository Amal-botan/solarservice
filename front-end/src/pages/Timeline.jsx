import * as React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import '../pages/Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          Add project
        </div>


        <div>
          <Card sx={{ minWidth: 600, maxWidth: 600 }}>
            <CardHeader
              avatar={
                <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              subheader="created-at timestamp"
            />
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
                <button>
                  <svg
                    className="feather feather-send sc-dnqmqq jxshSx"
                    xmlns="http://www.w3.org/2000/svg"
                    color="secondary"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"

            
                  >
                    {" "}
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    {" "}
                  </svg>
                </button>
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