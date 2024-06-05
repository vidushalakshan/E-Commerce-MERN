const mongoose = require("mongoose")

async function connectDB() {
    try{
        mongoose.connect(process.env.MONGODB_URI)
    }catch(err){
        console.log(err);
    }
}