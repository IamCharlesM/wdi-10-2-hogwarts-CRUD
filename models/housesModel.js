const mongoose = require("mongoose")

const houseSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    }
})


const House = mongoose.model("House", houseSchema)

module.exports = House;