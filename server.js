const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override');
const port = 3000

// DATABASE
require('./db/db.js')



//MIDDLEWARE
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({
    extended: true
}))



// CONTROLLERS
const houseController = require('./controllers/houseController.js');
//Assigns the route to the variable we just set
app.use('/houses', houseController);
const studentController = require('./controllers/studentController.js');
app.use('/students', studentController);




// HOME ROUTE
app.get('/', (req,res) => {
    res.render("index.ejs")
})




app.listen(3000, () => {
    console.log("Engines are ready captian!")
})