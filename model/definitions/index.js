const Sequelize = require('sequelize');

var config = require('../../config.json');

const db = {};

config = config.db;

let sequelize = require('../../common/dbConnection');

const User = require('../definitions/users');
const Cart = require('../definitions/carts');
const cartItems = require('../definitions/cartItems');
const Orders = require('../definitions/orders');
const Products = require('../definitions/products');
const Roles = require('../definitions/roles');

const models = {
    User, Orders, Cart, Products, Roles, cartItems,
};

// roles-users one to many
Roles.hasMany(User, {onDelete: 'CASCADE', foreignKey: 'rolesId'});
User.belongsTo(Roles, {onDelete: 'CASCADE', foreignKey: 'rolesId'});

// users-cart one to one
Roles.hasOne(Cart, {onDelete: 'CASCADE', foreignKey: 'userId'});
Cart.belongsTo(User, {onDelete: 'CASCADE', foreignKey: 'userId'});

// Products-CartItems one to many
Products.hasMany(cartItems, {onDelete: 'CASCADE', foreignKey: 'productId'});
cartItems.belongsTo(Products, {onDelete: 'CASCADE', foreignKey: 'productId'});

// Cart-CartItems one to many
Cart.hasMany(cartItems, {onDelete: 'CASCADE', foreignKey: 'cartId'});
cartItems.belongsTo(Cart, {onDelete: 'CASCADE', foreignKey: 'cartId'});

sequelize.model = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = {db, models};