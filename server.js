const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override');
const port = 3000


require('./db/db.js')





// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
//Middleware
app.use(bodyParser.urlencoded({
    extended: true
}))



const houseController = require('./controllers/houseController.js')




//Assigns the route to the variable we just set
app.use('/houses', houseController)


app.get('/', (req,res) => {
    res.render("index.ejs")
})




app.listen(3000, () => {
    console.log("Engines are ready captian!")
})