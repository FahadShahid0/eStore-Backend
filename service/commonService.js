const commonModel = require("../model/commonModel")

module.exports = {
    createRole : async function(body){
        const data = commonModel.createRole(body);
        return data
    },

    login: async function(body){
        console.log("serviceee",body);
        const data = await commonModel.login(body);
        return data;
    },
    // createToken: async function(body){
    //     const data = await commmonModel.createRole
    // }


};