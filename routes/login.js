const express = require('express');
const loginControllers = require('../controllers/login');

const router = express.Router();

router.get('/login', loginControllers.loginView);



module.exports = router;