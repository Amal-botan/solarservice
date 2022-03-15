# Solar Service 

This is an app that allows users to share their do it yourself project that use solar panels from square solar. *user will be able to purchase panels from project in the future.* 

## Features
* friends
* comments
* projects
* materials
* instructions
* tools
* chat

## User Stories
* Users can add other users as friends
* Users auth
* Users can post projects with materials, with instructions
* Users can have a list tools that they used for the project
* users can see projects other user have made
* users can comment on other projects
* users can review projects
* users can give ratings to projects
* users can chat with other users
* user can see the logged in status of users they are friends with
* Users can customize posted projects
* users can search for projects by category, name.
* Stretch: Users can get directions to puchase specific materials or tools listed in the project 
* Stretch: Users can group together to work on project
* Stretch: Notifications when user's project or comment is liked

## User Scenario
* Given that I am logged in, when I view the home page, then I should see projects that other users have made.
* Given that I am not logged in, when I visit the site, then I should see a login page
* Given that I see the login page, when I try to skip the login process, then I should be able to view the home page as a guest.
* Given that I am access to the navbar, when I search for a project, or a user then, I should be able to find them by name/title, or category.
* Given that I am viewing my profile, when I choose my projects, then I should be able to see the project that I have made

## Frontend Routes
* /login
* /register
* /home (animation)
* /timeline (post project, view recent posted projects, see online contacts, see info, searchbar.etc)
* /profile (when they start a project or customize a project, they can add to it and edit it on the profile page)
* /searched


## Backend Routes
BREAD
Auth
* /register
* /login

Users
* BROWSE - GET /users
* READ - GET /users/:id
* ADD - POST /users
* EDIT - PUT /users/:id
* DELETE - DELETE /users/:id

Friends 
* BROWSE - GET /friends
* READ - GET /friends/:id
* ADD - POST /friends/
* EDIT - PUT /friends/:id
* DELETE - DELETE /friend/:id

Projecs 
* BROWSE - GET /projects
* READ - GET /projects/:id
* ADD - POST /projects/
* EDIT - PUT /projects/:id
* DELETE - DELETE /projects/:id 

Materials 
* BROWSE - GET /projects
* READ - GET /projects/:id
* ADD - POST /projects/
* EDIT - PUT /projects/:id
* DELETE - DELETE /projects/:id 

Instructions 
* BROWSE - GET /instructions
* READ - GET /instructions/:id
* ADD - POST /instructions/
* EDIT - PUT /instructions/:id
* DELETE - DELETE /instructions/:id 

Photos 
* BROWSE - GET /photos
* READ - GET /photos/:id
* ADD - POST /photos/
* EDIT - PUT /photos/:id
* DELETE - DELETE /photos/:id 

Likes 
* BROWSE - GET /likes
* READ - GET /likes/:id
* ADD - POST /likes/
* EDIT - PUT /likes/:id
* DELETE - DELETE /likes/:id 


<!-- Tools 
* BROWSE - GET /tools
* READ - GET /tools/:id
* ADD - POST /tools/
* EDIT - PUT /tools/:id
* DELETE - DELETE /tools/:id  -->

Commemts 
* BROWSE - GET /commemts
* READ - GET /commemts/:id
* ADD - POST /commemts/
* EDIT - PUT /commemts/:id
* DELETE - DELETE /commemts/:id 


## Stack
* React
* Firebase
* Tailwind css
* Material UI
