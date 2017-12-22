# Dependencies

When pulling down this project, do an npm install to pull down the required dependencies.


# MongoDB

To run project you have to ensure you have MongoDB running


# Development Server

To start the node server --- npm start 

Then open another cmd prompt and type to start webpack to watch for changes ---  npm run build 


# Creating Components, Modules etc.

You can not use the Angular-cli to generate what you require anymore, this has to be done manually.


# Creating new routes

When creating new routes, ensure we apply (  canActive : [AuthGuard] ) to the necessary routes. 

This is to make sure unauthorised users can not access the application, without first logging in.






