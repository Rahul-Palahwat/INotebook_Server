const mongoose=require('mongoose');
require('dotenv').config();
// this is the string to connect to the databse 
const mongoURI=process.env.MONGO_URI;


// async ka use isliye krte h like hme jha bhi rukna hoga function ke andar jb tk promise return na ho jaye toh await likh denge 
const connectToMongo=  ()=>{
    // yha pr arrow function callback ke liye use kiya h 
    mongoose.connect(mongoURI , ()=>{
        console.log("Connected to mongo successfully");
    })
}


// ab iss module ko export krna padega...jisse ki hmm connectToMongo function use kr paye 

module.exports = connectToMongo;
