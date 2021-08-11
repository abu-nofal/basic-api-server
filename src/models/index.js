'use strict';

const POSTGRES_URI = "postgres://localhost:5432/lab03";
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.model');
const clothes = require('./clothes.model');

let sequelize = new Sequelize(POSTGRES_URI, {});

// lets define our Schema
module.exports = {
    food: food(sequelize, DataTypes),
    clothes: clothes(sequelize, DataTypes),
    db: sequelize

}