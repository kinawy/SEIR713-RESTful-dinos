const express = require('express')
const router = express.Router()

const fs = require('fs') // will use to read json files

// index route
router.get('/', (req, res)=>{
    // get the json from dinosaurs.json
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    // convert the json to javascript
    let dinoData = JSON.parse(dinosaurs)
    // render our dino index page and pass it the
    // dinoData as "myDinos"

    let nameFilter = req.query.nameFilter
    
    // keep in dinoData any dinos whose name matches the nameFilter the user searched for
    if (nameFilter) {
        dinoData = dinoData.filter((dino) => {
            return dino.name.toLowerCase() === nameFilter.toLowerCase()
        })
    }
    // render our dino index page and pass it the dinoData as "myDinos"
    res.render('dinosaurs/index', {myDinos: dinoData})
})

// get the new dino form
router.get('/new', (req,res)=>{
    res.render('dinosaurs/new')
})

// show route (uses URL parameter "id")
router.get('/:id', (req, res)=>{
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    // grab the id parameter from the url and convert to int (was string originally)
    let dinoIndex = parseInt(req.params.id)
    res.render('dinosaurs/show', {myDino: dinoData[dinoIndex]})
})

// post a new dino!!
router.post('/', (req, res) => {
    // get JSON dinos and convert to a js array of objects
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    
    // push new dino to the array
    dinoData.push(req.body)

    // convert dinoData back to JSON and write to dinosaurs.json file
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    
    // redirect to the index get route
    res.redirect('/dinosaurs');
    
})

module.exports = router;