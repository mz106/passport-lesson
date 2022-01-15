# passport-lesson

## Setup

Creat GitHub repo.
Initalize npm project;

    npm init -y

Install the following dependencies;

    npm i dotenv express nodemon

Set up nodemon - add the following to your package.json under "scripts";

    "scripts": "nodemon <your file path>"


## Step One - Add Enviromental Variables

Enviromental Variables (EN_VAR):
a value that is set outside of the program.

In app.js;

Require dotenv in app.js;
    
    require("dotenv").config();

Create an env file;

    touch .env

Add the port number to the .env file;

    PORT = <a port number that you have chosen>

NOTE: Do not use 3306, 27017 or 3000 here.

Import out port number in to app.js;

    const port = require(process.env.PORT);

## Step Two - Set up our server (i.e. connect out app to the internet)

Require express;

    const express = require("express");

Create our app variable;

    const app = express();

Allow express to use JSON;

    app.use(express.json());

Create out connection;

    app.listen(port, () => {
        console.log("app is listening);
    });