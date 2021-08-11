'use strict';

const express = require('express');

const router = express.Router();
const {clothes} = require('../models/index');
// add routes
router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);

router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);


async function getClothes(req, res) {
    // get me all data from people
    let allClothes = await clothes.findAll();
    res.status(200).json(allClothes);
}

async function getOneClothes(req, res) {
    const id = parseInt(req.params.id); // req.params is an object 
    let oneClothes = await clothes.findOne({ where: {id: id} });
    res.status(200).json(oneClothes);
}

async function createClothes(req, res) {
    let newItem = req.body;
    let newClothes = await clothes.create(newItem);
    res.status(200).json(newClothes);
}

async function updateClothes(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    // find the person
    let found = await clothes.findOne({ where: {id: id} });
    // update the person + save
    let updatedClothes = await found.update(obj);
    res.status(200).json(updatedClothes);
}

async function deleteClothes(req,res) {
    let id = parseInt(req.params.id);
    let deletedClothes = await clothes.destroy({where: {id: id}});
    res.status(204).json(deletedClothes);
}



module.exports = router;