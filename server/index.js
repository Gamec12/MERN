const express = require("express")
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users') // this makes get the model we created (need to have access to the model)

mongoose.connect("mongodb+srv://Gamec:lwgQky26a2F3rjcn@cluster0.mzxrwcj.mongodb.net/AppDatabase?retryWrites=true&w=majority") //takes a stirng that represents to connection to the cluster

app.get("/getUsers", (req, res) => {
    // here we write all the logic we want to have for when the front end requests getUsers route



}) // we put a route to determine what it is and make a call back function that takes req and res  req get info from front end and from res we send info to the front end




app.listen(3001, () => { // a call back function which runs when the server starts running (making sure it runs)
    console.log("IT RUNS")
})