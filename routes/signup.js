const express = require('express');
const signupControllers = require('../controllers/signup');

const router = express.Router();

router.get('/signup', signupControllers.signupView);



module.exports = router;