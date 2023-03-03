const { Sequelize, Model, DataTypes } = require('sequelize');
let sequelize = require ('../../common/dbConnection');

class User extends Model {};

User.init({    
    id:{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : DataTypes.INTEGER,
    },
    firstName:{
        primaryKey : false,
        allowNull : false,
        type : DataTypes.STRING(),
    },
    lastName:{
        primaryKey : false,
        allowNull : false,
        type : DataTypes.STRING(),
    },
    userName:{
        unique : false,
        allowNull : false,
        type : DataTypes.STRING(),
    },
    email:{
        unique : true,
        allowNull : false,
        type : DataTypes.STRING(),
    },
    phoneNumber : {
        unique:true,
        allowNull: false,
        type : DataTypes.STRING(),     
    },
    password:{
        unique : false,
        allowNull : false,
        type : DataTypes.STRING(),
    },
},
    
    {
        timestamps : true,
        paranoid : true,
        sequelize : sequelize,
        modelName: 'User'
    },
        
);

module.exports = User;