// require nodes
const mongoose = require("mongoose");

// create schema
const studentSchema = new mongoose.Schema({
    name: { type: String, require: true },
    year: Number,
    house: String
})

// create model
const Student = mongoose.model('Student', studentSchema);

// export student
module.exports = Student;
