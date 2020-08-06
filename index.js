const express = require('express')
const app = express()
// create an instance of layouts
const ejsLayouts = require('express-ejs-layouts')
const fs = require('fs') // will use to read json files

// tell express we're using ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts) // tell express to let us use a layout template

// home route
app.get('/', (req, res)=>{
    res.render('home')
})

// index route
app.get('/dinosaurs', (req, res)=>{
    // get the json from dinosaurs.json
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    // convert the json to javascript
    let dinoData = JSON.parse(dinosaurs)
    // render our dino index page and pass it the
    // dinoData as "myDinos"
    res.render('dinosaurs/index', {myDinos: dinoData})
})

// get the new dino form
app.get('/dinosaurs/new', (req,res)=>{
    res.render('dinosaurs/new')
})

// show route (uses URL parameter "id")
app.get('/dinosaurs/:id', (req, res)=>{
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    // grab the id parameter from the url and convert to int (was string originally)
    let dinoIndex = parseInt(req.params.id)
    res.render('dinosaurs/show', {myDino: dinoData[dinoIndex]})
})


app.listen(8000)