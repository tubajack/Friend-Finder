//Include the path package to get the correct file path for the html
var path = require("path");

//Routing time
module.exports = function(apply){
    //In this function, we will have HTML get requests
    //When the user visits a webpage, this below code handles what will happen. 

    apply.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}