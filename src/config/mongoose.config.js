const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL).then( () => {
    console.log("MongoDB Connected");
}).catch( err => console.log(err?.message ?? "Failed to connect to MongoDB"));