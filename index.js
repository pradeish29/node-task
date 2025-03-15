require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const userRoute = require('./routes/users.route');

const app = express();
app.use(express.json());

app.use('/users', userRoute.userRoute);

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((error) => console.error("❌ Connection Failed:", error));

app.listen(3000, () => {
    console.log('🚀 Server is running on port 3000');
});
