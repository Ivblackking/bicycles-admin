const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3500;
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

app.use('/api/v1', routes);

app.get("/", (req, res) => {
    res.send({ message: "Hello from Express!" });
});

app.post("/", (req, res)=>{});
app.patch("/", (req, res)=>{});

app.listen(port, () => console.log(`Listening on port ${port}`));