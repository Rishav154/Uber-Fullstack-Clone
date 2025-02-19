const mongoose = require('mongoose');

async function connectToDB() {
    try{
        await mongoose.connect(process.env.DB_CONNECT)
        console.log("Successfully connected to database.")
    }catch (error){
        console.log(error)
    }
}

module.exports = connectToDB;
