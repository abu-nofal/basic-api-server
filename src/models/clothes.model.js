'use strict';

const clothes = (sequelize, DataTypes) => {
  let clothes=  sequelize.define('clothes', {
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },

        pants: {
            type: DataTypes.STRING,
            // allowNull: false
        }, 
        shoes: {
            type: DataTypes.STRING
        },
        Shirt: {
            type: DataTypes.STRING
        }
    });
    return clothes
}

module.exports = clothes;