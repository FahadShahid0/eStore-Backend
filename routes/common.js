var express = require('express');
var router = express.Router();
const {createRole, login } = require('../controller/index');
// const { login } = require('../model/commonModel');
router.post('/createRole', createRole);
router.post('/login', login);
module.exports = router;