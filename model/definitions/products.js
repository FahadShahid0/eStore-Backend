const { Sequelize, Model, DataTypes } = require('sequelize');
let sequelize = require ('../../common/dbConnection');

class Products extends Model {};

Products.init({

    
    productID:{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER,
    },
    productsName:{
        unique : true,
        allowNull : false,
        type : DataTypes.STRING(),
    },
    productDetails:{
        unique : false,
        allowNull : false,
        type: DataTypes.STRING(),
    },
    productPrice:{
        allowNull : false,
        type : DataTypes.INTEGER,
    }
    
        
},
{
    timestamps : true,
    paranoid : true,
    sequelize : sequelize,
    modelName: 'Products',
    
}
);

module.exports =  Products;