const express = require('express');  // importer expressjs
const programmetvControllers = require('../controllers/programmetv');  // Récupérer le fichier programmetv

const router = express.Router();

router.get('/programmetv', programmetvControllers.programmetvView);


module.exports = router;

