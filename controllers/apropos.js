module.exports = {   // Exportation d'un module contenant une ou plusieurs fonctions
    aproposView: (req, res) => {   // Définition de la fonction "aproposView" qui gère une requête HTTP
        // Récupération de la connexion à la base de données via req.getConnection()
    req.getConnection((erreur, connection) => {
        if (erreur) {   // Vérification s'il y a une erreur lors de la connexion
            console.log("Erreur de connexion à la base de données", erreur);   // Affiche l'erreur dans la console
        }
        // Exécution d'une requête SQL pour récupérer toutes les données de la table "equipe"
        connection.query("SELECT * FROM equipe", [], (err, resultat) => {
            if (err) {    // Vérification s'il y a une erreur lors de l'exécution de la requête SQL
                console.log("Erreur lors de l'exécution de la requête :", err);   // Affiche l'erreur dans la console
            }
            // Affichage des résultats de la requête dans la console
            console.log("Données récupérées :", resultat);
            
            // Rendu de la vue "apropos" en passant les données récupérées sous le nom "equipes"
            res.render("apropos", { equipes: resultat });
        });
    });
        //res.render('apropos');  // Rend la vue "apropos" et l'envoie en réponse au client
    }
}