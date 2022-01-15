const movieRouter = require("express").Router(); //step two 

//localost:<port>/movies
movieRouter.get("/", (req, res) => {
    try {
        res.status(200).json({message: "This is our movie page where we would have movie functionality and show our movies from the database"});
    } catch (error) {
        res.status(500).json({message: error});
    }
});

//localhost<port>:/movies/addMovies
//.post() - POST method - POST is a HTTP verb, which allows us to add things to a database. 
//We would take the req (request) object (from the client) and access the body from it (req.body).
//This woould return the information that the client is sending. For example, a user could add a
//movie title and actor into a React frontend and click 'Add Movie'. This would then send a request
//(req) which this route would then access (req.body). Then the route sends a POST to the database
//to add the new movie.
movieRouter.post("/addMovies", (req, res) => {
    try {
        res.status(201).json({message: "Like /listMovies, this is not a page. Rather, it gives a path to the database to add movies."})
    } catch (error) {
        res.status(500).json({message: error});
    }
});

movieRouter.get("/listMovies", (req, res) => {
    try {
        res.status(200).json({message: "This route will get movies from our database. We would attach this route to a button on the frontend. This would NOT correspond to a page in of itself."}, {req: req});
    } catch (error) {
        res.status(500).json({message: error});
    }
});

//localhost<port>:/movies/listMovies/:title
//req.params - req.params (request parameters) is another part of the request object which can 
//contain specific search information from the client. In this case, the client will have a 
//particular movie title chosen by the user, e.g. 'Jaws'. The colon in "listMovies/:title"
//tells us that 'title' is essentially a parameter, and that a value will have to be passed to 
//it (e.g. req.params.title). The exact terms will depend on what is sent in the req.params
//from the client.
movieRouter.get("listMovies/:title", (req, res) => {
    try {
        res.status(200).json({message: `listMovies/:title will get a movie by its title, using req.params. ${req.query.title}`});
    } catch (error) {
        res.status(500).json({message: error});
    }
});

// .put() - PUT method - PUT is a HTTP verb. We can use it to modify
//an entry to our database, using req.body.
//req.params - req.params (request parameters) is another part of the request object which can 
//contain specific search information from the client. In this case, the client will have a 
//particular movie title chosen by the user, e.g. 'Jaws'. The colon in "updateMovie/:title"
//tells us that 'title' is essentially a parameter, and that a value will have to be passed to 
//it (e.g. req.params.title). The exact terms will depend on what is sent in the req.params
//from the client.
movieRouter.put("/updateMovie/:title", (req, res) => {
    try {
        res.status(204).json({message: "This route would be used to update a movie with req.body and req.params"});
    } catch (error) {
        res.status(500).json({message: error});
    }
});

//localhost:<port>/movies/deteleMovie
//.delete() - DELETE method - DELETE is a HTTP verb, used to delete things in our database.
//We would use req.params.title to delete our movie 'Jaws' from the database.
movieRouter.delete("/deleteMovie", (req, res) => {
    try {
        res.status(204).json({message: "This route will delete a movie"});
    } catch (error) {
        res.status(500).json({message: error});
    }
});

module.exports = movieRouter; //step two