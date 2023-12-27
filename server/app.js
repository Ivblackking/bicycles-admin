const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

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

const base_url = "/api/v1/bicycles";

app.get(base_url, (req, res) => {
    res.send({ message: "Hello from Express!" });
});

app.get(`${base_url}/:id`, (req, res) => {
    res.send({ message: "Hello from Express!" });
});

app.post(`${base_url}/:id`, (req, res)=>{});

app.patch(`${base_url}/:id`, (req, res)=>{});

app.delete(`${base_url}/:id`, (req, res)=>{});

app.listen(port, () => console.log(`Listening on port ${port}`));