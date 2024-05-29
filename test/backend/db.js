const mongoose = require('mongoose');
const uri = "mongodb+srv://lovekumar:love1234@cluster0.e812pej.mongodb.net/gymbrosmern?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
