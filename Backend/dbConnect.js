const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDb Connected Successfully");

    } catch(error){
        console.log("Error in connected Mongodb ",error);
        process.exit(0);

    }
}

module.exports = connectDB;

