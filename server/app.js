const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3500;
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

app.get("/api", (req, res) => {
    res.send({ message: "Hello from Express!" });
});

app.post("/api", (req, res)=>{});
app.patch("/api", (req, res)=>{});

app.listen(port, () => console.log(`Listening on port ${port}`));