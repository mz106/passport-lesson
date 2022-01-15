
const homeRouter = require("express").Router(); // step two - require express router

//homeRouter is a way to allow a route to the path "/". If you
//were to go to 'localhost:<port>/' in your browser, you would see
//on the screen 'message: "This is the home page" - this is in the object
//inside homeRouter.get().


//.get() - GET method - GET is a HTTP verb. A HTTP verb is a set of 
//request methods to indicate the desired action to be performed for 
//a given resource.
//Here, we are using GET, which allows us to make a request to get something
//from somewhere. For now, we are not getting anything, but later we will 
//use the method to get things from a database
homeRouter.get("/", (req, res, next) => { //set homeRouter to path "/" i.e. localhost/
// req: short for request, an object that contains information on a request from
//from a client (e.g. a frontend React, or from Insomnia)
//res: short for response, an object that is sent back to the client containing 
//the nessecary information.     
    try {
        res.status(200).json({message: "This is the homepage"});
    } catch (error) {
        res.status(200).json({message: error});
    }
});

module.exports = homeRouter; // step two export homeRouter