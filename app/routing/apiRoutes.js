//We are getting data from the friends.js file
var friendsInTech = require("../data/friends");


//We start this file off with a module.exports. 
module.exports = function(application){
    //Our data is in the friends.js file.
    //We need to import the data in the friends.js first
    application.get("/api/friends", function(req, res){
        res.json(friendsInTech);
    });
    
    //We need to be able to add to the friends array
    application.post("/api/friends", function(req, res){

        //How do we reference the newUser object? Access newUser data
        console.log(req.body);
        res.json(req.body);
        var newUser = req.body;

        //How do we find the match? Add this to the friend database
        

    })

}