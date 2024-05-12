const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () =>{

    // const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.2ai1xte.mongodb.net/?retryWrites=true&w=majority`
    const MONGODB_URI =`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.kcawspm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    
    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () =>{
        console.log("DB connected successfully");
    });

    mongoose.connection.on('disconnected', () =>{
        console.log("DB disconnected");
    });

    mongoose.connection.on('error', () => {
        console.log("There is an error while connecting with the database ", error.message);
    });
}

module.exports = Connection;
