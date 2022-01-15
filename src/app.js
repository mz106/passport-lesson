require("dotenv").config(); 

const express = require("express"); 

const port = process.env.PORT; 

const homeRouter = require("./routes/homeRoutes"); //step two require homeRouter
const movieRouter = require("./routes/movieRoutes"); //step two require movieRouter

const app = express(); 

app.use(express.json()); 

//Here, we set the path "/", which will equate to localhost:<port>/, or
//with no direction to another page. We attach, or 'mount' (ask Neil!!!)
//our homeRouter to the path "/". So, when we run our app and go to localhost:<port> ,
//our the path in out homeRouter route will be activted. 
// So, what will happen is:
//1. go to localhost:<port>/ ("/" being the first path)
//2. go to the path "/" which is set in homeRouter

app.use("/", homeRouter); //step two mount homeRouter on path "localhost:<port>/"

app.use("/movies", movieRouter); //step two mount movieRouter on path "localhost:<port>/movies/"

app.listen(port, () => { 
    console.log("app is listening")
});

