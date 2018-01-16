const mongoose = require('mongoose');

//DB
mongoose.connect('mongodb://localhost:27017/houses', {
    useMongoClient: true
})

//check our DB
mongoose.connection.once('open', () => {
    console.log('connected to God')
})

mongoose.connection.on('connected', ()=> {
    console.log('mongodb is connected')
})

mongoose.connection.on('disconnected', ()=> {
    console.log('mongodb is disconnected')
})

mongoose.connection.on('error', (error)=> {
    console.log('There was an error connecting', error)
})