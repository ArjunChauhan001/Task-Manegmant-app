const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Task_management');

const db = mongoose.connection;

db.once('open', (err) => {

    err ? console.log("Database not connect") : console.log("Database is connect");
    
})


module.exports = db;