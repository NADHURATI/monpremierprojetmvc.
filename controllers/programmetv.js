module.exports = {
    programmetvView: (req, res) => {
        // Récupération de la connexion à la base de données via req.getConnection()
    req.getConnection((erreur, connection) => {
        if (erreur) {   // Vérification s'il y a une erreur lors de la connexion à la base de données
            console.log("Erreur de connexion à la base de données", erreur);   // Affiche l'erreur dans la console
        }
        // Exécution d'une requête SQL pour récupérer toutes les données de la table "programmediffusion"
        connection.query("SELECT * FROM programmediffusion", (err, resultat) => {
            if (err) {   // Vérification s'il y a une erreur lors de l'exécution de la requête SQL
                console.log("Erreur lors de l'exécution de la requête :", err);  // Affiche l'erreur dans la console
            }
            // Affichage des résultats de la requête dans la console
            console.log("Données récupérées :", resultat);
            
            // Rendu de la vue "programmetv" en passant les données récupérées sous le nom "emissions"
            res.render("programmetv", { emissions: resultat });
        });
    });
    }
}