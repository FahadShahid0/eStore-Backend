const bcrypt= require('bcrypt');
const userModel = require("../model/userModel")

module.exports = {
    createUser : async function(body){
        body.password = await bcrypt.hashSync(body.password, 10);
        const user = await userModel.getUserByAttribute(body);
        if(user.count!=0){
            return "user already exists!"
        }
        
        const data =  await userModel.createUser(body);
        return data;
    },

    getUser : async function(){
        const data =  await userModel.getUser();
        console.log("Hello4");
        return data;
    },

    getUserByID : async function(ids){
        const data =  await userModel.getUserByID(ids);
        return data;
    },

    updateUser : async function(body){
        const data =  await userModel.updateUser(body);
        return data;
    },

    removeUser: async function(ids){
        const user = await userModel.getUserByID(ids);
        if(user.count==0){
            return "user already exists!"
        }
        const data =  await userModel.removeUser(ids);
        return data;
    }
    
};