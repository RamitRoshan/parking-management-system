const mongoose = require('mongoose');
 

const configureDB = async function() {
    try{
        await mongoose.connect(process.env.DB_URL);  
        console.log('connected to db');
    } catch(err){
        console.log('error connection to db', err.message);
    }
}
module.exports = configureDB;