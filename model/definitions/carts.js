const { Sequelize, Model, DataTypes } = require('sequelize');
let sequelize = require ('../../common/dbConnection');

class Carts extends Model {};

Carts.init({

    
    cartID:{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER,
    },
    cartQuantity:{
        allowNull : false,
        type : DataTypes.INTEGER,
    },
},
{
    
    timestamps : true,
    paranoid : true,
    sequelize : sequelize,
    modelName: 'Carts'
}
    

);

module.exports = Carts;