// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const port = 3000;
/* Start up an instance of app */
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port,()=>{
    console.log('Your Server Is Running on Port:',port)

})
// GET route return projectData
app.get('/getTemData',(req,res)=>{
    res.send(projectData)
})
//POST Route saving without return
app.post('/saveTemData',(req,res)=>{
    projectData.temp=req.body.temp
    projectData.date=req.body.date
    projectData.content=req.body.content
    res.end()
})