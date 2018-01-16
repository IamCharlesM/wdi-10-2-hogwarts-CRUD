const express = require('express');
const router = express.Router();

// MODEL
const Student = require('../models/students.js');

router.get('/', (req, res) => {
	Student.find({}, (err, allStudents) => {
		res.render('index.ejs', { students: allStudents })
	})
})

router.get('/new', (req, res) => {
	res.render('./student/new.ejs')
})


module.exports = router;