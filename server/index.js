const express = require("express")
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/Users') // this makes get the model we created (need to have access to the model)

app.use(express.json()) // we are using this bec we need to parse the json if we don't do this any requests involing the body will give an error

mongoose.connect("mongodb+srv://Gamec:lwgQky26a2F3rjcn@cluster0.mzxrwcj.mongodb.net/AppDatabase?retryWrites=true&w=majority") //takes a stirng that represents to connection to the cluster

app.get("/getUsers", (req, res) => {
    // here we write all the logic we want to have for when the front end requests getUsers route
    UserModel.find({}).then((result) => {
        res.json(result).catch((err) => {
            console.log(err) // mongoDB no longer supports call back functions on find
        })
    }) // an empty object means return all the data in the collection then calls the call back function that returns 2 things errors and the result from the query


}) // we put a route to determine what it is and make a call back function that takes req and res  req get info from front end and from res we send info to the front end


app.post("/createUser", async (req, res) => {
    const user = req.body // data we want to send to our database we are passing an object called body
    const newUser = new UserModel(user)
    await newUser.save(); // to save the new info by  making it an async function most of the operations we are going to do are async

    res.json(user) // just sending it back to know we are getting the correct info in our front end
}) // a request to add data to the database



app.listen(3001, () => { // a call back function which runs when the server starts running (making sure it runs)
    console.log("IT RUNS")
})