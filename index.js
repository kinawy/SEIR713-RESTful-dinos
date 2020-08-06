const express = require('express')
const app = express()
// create an instance of layouts
const ejsLayouts = require('express-ejs-layouts')


// tell express we're using ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts) // tell express to let us use a layout template
app.use(express.urlencoded({extended: false})) // body-parser-middleware


app.use('/dinosaurs', require('./controllers/dinos'))
app.use('/prehistoric_creatures', require('./controllers/prehist'))
// home route
app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(8000)