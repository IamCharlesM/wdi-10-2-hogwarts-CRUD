const express = require('express');
const router = express.Router()

const House = require('../models/housesModel.js')


router.route('/') 
    .get( (req,res) => {
    House.find({}, (err, allHouses)=>{
      res.render("./house/index.ejs", {
          houses: allHouses
      })  
    })
    
})
.post((req,res) => {
    House.create(req.body, (err, createdHouse) => {
        if(err) console.log(err);
        console.log("hit post route for new")
        console.log(req.body)
        console.log(createdHouse)
        res.redirect("/houses")
    })
} )

router.get('/new', (req,res) => {
    res.render("./house/new.ejs")
})



router.route('/:id')
    .delete((req,res)=>{
    House.findByIdAndRemove(req.params.id, (err, response) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect("/houses")
        }
    })
})















module.exports = router