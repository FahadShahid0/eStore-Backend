const { Sequelize, Model, DataTypes } = require('sequelize');
let sequelize = require ('../../common/dbConnection');

class Orders extends Model {};

Orders.init({
    
    ordersID:{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER,
    },
    ordersDetails:{
        unique : true,
        allowNull : false,
        type : DataTypes.STRING(),
    },
    orderDate:{
        unique : false,
        allowNull : false,
        type : DataTypes.DATE,
    },
    orderQuantity : {
        allowNull : false,
        type : DataTypes.INTEGER,
    }
    
        
},

{
    timestamps : true,
    paranoid : true,
    sequelize : sequelize,
    modelName: 'Orders'
}

);

module.exports = Orders;