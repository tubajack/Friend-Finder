//Get the npm packages that I need
var express = require("express");
var path = require("path");

//Set up the express application 
var application = express();
var PORT = process.env.PORT || 3000;

//Set up the express application to handle data parsing
application.use(express.json());
application.use(express.urlencoded({extended: true}));

//Don't forget to import the routes
require("./app/routing/apiRoutes")(application);
require("./app/routing/htmlRoutes")(application);

//Start the server to begin listening
application.listen(PORT, function(){
    console.log("Application listening on PORT " + PORT);
})