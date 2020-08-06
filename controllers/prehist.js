const express = require('express')
const router = express.Router()
const fs = require('fs') // will use to read json files


router.get('/', (req, res)=>{
    // get the json from dinosaurs.json
    let preHist = fs.readFileSync('./prehistoric_creatures.json')
    // convert the json to javascript
    let preHistData = JSON.parse(preHist)
    // render our dino index page and pass it the
    // dinoData as "myDinos"

    
    // render our dino index page and pass it the dinoData as "myDinos"
    res.render('prehistoric_creatures/index', {myPreHist: preHistData})
})

// get the new dino form
router.get('/new', (req,res)=>{
    res.render('prehistoric_creatures/new')
})

// show route (uses URL parameter "id")
router.get('/:id', (req, res)=>{
    let preHist = fs.readFileSync('./prehistoric_creatures.json')
    let preHistData = JSON.parse(preHist)
    // grab the id parameter from the url and convert to int (was string originally)
    let preHistIndex = parseInt(req.params.id)
    res.render('prehistoric_creatures/show', {myPreHist: preHistData[preHistIndex]})
})

// post a new dino!!
router.post('/', (req, res) => {
    // get JSON dinos and convert to a js array of objects
    let preHist = fs.readFileSync('./prehistoric_creatures.json')
    let preHistData = JSON.parse(preHist)
    
    // push new dino to the array
    preHistData.push(req.body)

    // convert dinoData back to JSON and write to prehistoric_creatures.json file
    fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(preHistData))
    
    // redirect to the index get route
    res.redirect('/prehistoric_creatures');
    
})

router.get('/prehistoric_creatures/edit/:id', (req, res) => {

})

module.exports = router;