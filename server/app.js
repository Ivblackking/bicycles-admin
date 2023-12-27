const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const Bicycle = require('./models/model');

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

app.use(express.json());

app.get(base_url, async (req, res) => {
    try{
        const data = await Bicycle.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

app.get(`${base_url}/:id`, async (req, res) => {
    try{
        const data = await Bicycle.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});

app.post(`${base_url}/:id`, async (req, res)=>{
    const bicycle = new Bicycle({
        id: req.params.id,
        name: req.body.name,
        type: req.body.type,
        color: req.body.color,
        wheel_size: req.body.wheel_size,
        price: req.body.price,
        description: req.body.description,
    });

    try{
        const bicycleToSave = await bicycle.save();
        res.status(200).json(bicycleToSave);
    }catch(error){
        res.status(400).json({message: error.message});
    }
});

app.patch(`${base_url}/:id`, (req, res)=>{});

app.delete(`${base_url}/:id`, async (req, res)=>{
    try {
        const id = req.params.id;
        const data = await Bicycle.findByIdAndDelete(id);
        res.send(`The bicycle ${data.name} has been deleted`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));