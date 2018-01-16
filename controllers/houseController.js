const express = require('express');
const router = express.Router()

const House = require('../models/housesModel.js')

// INDEX ROUTE
// POST ROUTE
router.route('/') 
    .get( (req,res) => {
    House.find({}, (err, allHouses)=>{
      res.render("./house/index.ejs", {
          houses: allHouses
      })  
    })
    
}).post((req,res) => {
    House.create(req.body, (err, createdHouse) => {
        if(err) console.log(err);
        console.log("hit post route for new")
        console.log(req.body)
        console.log(createdHouse)
        res.redirect("/houses")
    })
} )

// NEW ROUTE
router.get('/new', (req,res) => {
    res.render("./house/new.ejs")
})


// SHOW ROUTE
// PUT ROUTE
// DELETE ROUTE
router.route('/:id')
    .get((req, res) => {
        House.findById(req.params.id, (err, foundHouse) => {
            res.render('./house/show.ejs', { house: foundHouse })
        })
    }).put((req, res) => {
        House.findByIdAndUpdate(
            req.params.id,
            req.body,
            (err, updatedHouse) => {
                res.redirect('/houses')
            })
    }).delete((req,res)=>{
         House.findByIdAndRemove(req.params.id, (err, response) => {
            if(err) {
                console.log(err)
             } else {
                res.redirect("/houses")
            }
    })
})

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    House.findById(req.params.id, (err, foundHouse) => {
        res.render('./house/edit.ejs', { house: foundHouse })
    })
})















module.exports = router