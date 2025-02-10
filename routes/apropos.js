// Importation du module Express pour créer un routeur
const express = require('express');  

// Importation du contrôleur "aproposControllers" depuis le dossier "controllers"
const aproposControllers = require('../controllers/apropos');  

// Création d'un routeur Express pour gérer les routes
const router = express.Router();  

// Définition d'une route GET sur la racine ('/') qui appelle la fonction "aproposView" du contrôleur
router.get('/apropos', aproposControllers.aproposView);  






// Exportation du routeur pour qu'il puisse être utilisé dans d'autres fichiers



module.exports = router;  
