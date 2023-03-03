const commonService = require('../../service/commonService');

module.exports = async function(req, res){

    const data = await commonService.createRole(req.body);
    res.send(data);
}