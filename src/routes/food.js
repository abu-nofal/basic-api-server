'use strict';

const express = require('express');

const {food} = require('../models/index');
const router = express.Router();
// add routes

router.get('/food', getFood);
router.get('/food/:id', getOneFood);

router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getFood(req, res) {
    // get me all data from people
    let newFood = req.body;
    console.log(newFood)
    let foods = await food.findAll();
    res.status(200).json(foods);
}

async function getOneFood(req, res) {
    const id = parseInt(req.params.id); // req.params is an object 
    let oneFood = await food.findOne({ where: {id: id} });
    res.status(200).json(oneFood);
}

 async function createFood(req, res) {
    let newFood = req.body;
    console.log(newFood)
    let ahamd = await food.create(newFood);
    res.status(200).send(ahamd);
    
}

async function updateFood(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    // find the person
    let found = await food.findOne({ where: {id: id} });
    // update the person + save
    let updatedFood= await found.update(obj);
    res.status(200).json(updatedFood);
}

async function deleteFood(req,res) {
    let id = parseInt(req.params.id);
    let deletedFood = await food.destroy({where: {id: id}});
    res.status(204).json(deletedFood);
}



module.exports = router;