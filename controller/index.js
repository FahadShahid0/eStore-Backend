module.exports = {
    
    createUser: require('./users/createUser'),
    getUser: require('./users/getUser'),
    getUserByID: require('./users/getUserByID'),
    
    updateUser: require('./users/updateUser'),
    removeUser: require('./users/removeUser'),
    
    // productInfo: require('./product/productInfo'),
    login: require('./common/authentication'),

    //roles
    createRole: require("./common/role"),



};