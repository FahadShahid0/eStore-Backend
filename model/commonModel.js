const { models } = require("./definitions")
const jwtSecret = require('../config.json')
const jwt = require('jsonwebtoken');
// const { token } = require("morgan");


let refreshTokens=[];

module.exports = {
    createRole : async function(body){
        // return body;
        const result = await models.Roles.create({...body});
        return result;
    },


    login: async function(body){
        console.log("aaaaaaaaaa", body);
        let user = await models.User.findOne({
            where:{
                userName: body.userName
            }
        })

        
        user = user.dataValues;
        console.log(user);
        const accessToken = generateAccessToken(user)
        const token = jwt.sign(user, jwtSecret.jwt.secret)
        refreshTokens.push(token)

        return({ accessToken: accessToken, refreshToken: token})

        },
    
}

function generateAccessToken(user) {
    return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: '3000s' })
}

