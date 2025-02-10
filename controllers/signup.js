module.exports = {
    signupView: (req, res) => {
        req.getConnection((erreur, connection) => {
            if (erreur) {
                console.log("Erreur de connexion à la base de données", erreur);
            }
            connection.query("SELECT * FROM utilisateur", (err, resultat) => {
                if (err) {
                    console.log("Erreur lors de l'exécution de la requête :", err);
                }
                console.log("Données récupérées :", resultat);
                // Passer les données correctement à la vue
                res.render("signup", { utilisateur: resultat });
            });
        });
    }
}