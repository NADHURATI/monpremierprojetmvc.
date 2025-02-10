const express = require('express');
const formulaireProgrammetvControllers = require('../controllers/formulaireProgrammetv');

const router = express.Router();

router.get('/formulaireProgrammetv', formulaireProgrammetvControllers.formulaireProgrammetvView);


module.exports = router;