require("dotenv").config(); //step one require dotenv and add port num to .env

const express = require("express"); //step two require express and set up app

const port = process.env.PORT; // step one

const app = express(); //step two

app.use(express.json()); //step two - allows the use of json

app.get('/', (req, res) => {
    try {
        res.status(200).json({message: 'hello world'})
    } catch (error) {
        console.log(error);
    }
    
});

app.listen(port, () => {
    console.log("app is listening")
});

