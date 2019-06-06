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
        var newUser = req.body;
        var response = newUser.scores;

        //How do we find the perfect friend? This is the algorithm. 
        var perfectFriendName = "";
        var perfectFriendImage = "";
        var bigDifference = 1000000; //Make the difference large on purpose
        
        //Take a look at all of our tech friends in the list
        for(var antonio = 0; antonio < friendsInTech.length; antonio++){

            //Find the differences from each question
            var bob = 0; //Bob is the difference
            for(var ihab = 0; ihab < response.length; ihab++){
                bob += Math.abs(friendsInTech[antonio].scores[ihab] - response[ihab]);
            }

            //What happens if we have the lowest difference 
            if(bob < bigDifference){
                bigDifference = bob;
                perfectFriendName = friendsInTech[i].name;
                perfectFriendImage = friendsInTech[i].photo;
            }
        }

        //Add the new user
        friendsInTech.push(newUser);

        //Send a response which is appropriate
        res.json({status: 'OK', perfectFriendName: perfectFriendName, perfectFriendImage: perfectFriendImage});
        

    });

}