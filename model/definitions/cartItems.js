const { Sequelize, Model, DataTypes } = require('sequelize');
let sequelize = require ('../../common/dbConnection');

class cartItems extends Model {};

cartItems.init({

    
    id:{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER,
    },
    // cartQuantity:{
    //     allowNull : false,
    //     type : DataTypes.INTEGER,
    // },
},
{
    
    timestamps : true,
    paranoid : true,
    sequelize : sequelize,
    modelName: 'cartItems'
}
    

);

module.exports = cartItems;