/// ici, import du frameword ExpressJS
const express = require("express");
const mysql2 = require("mysql2");
const url = require("url");
const fs = require("fs");
const myConnection = require("express-myconnection");
const connection = require("express-myconnection");
const aproposRoutes = require('./routes/apropos');
const programmetvRoutes = require('./routes/programmetv');
const formulaireProgrammetvRoutes = require('./routes/formulaireProgrammetv');
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');

const optionConnection = {
    host: "localhost",
    user: "root",
    password: "tanzelmy03@a",
    port: 3306,
    database: "chainetv",
};

// Je crée mon application ExpressJS
const app = express();

// Middleware de connection à la base de données
// 'pool' est la statégie de connection à la base de données
app.use(myConnection(mysql2, optionConnection, "pool"));

app.use(express.urlencoded({extended: false}));

// L'endroit ou se situent les vues qui saffichent sur la navigateur
app.set("views", "./views");

// Je précise le moteur de lecture de vues à savoir ejs
app.set("view engine", "ejs");

// précise le répertoire 'public' qui contient les fichiers statics
app.use(express.static("public"));

app.use('/',aproposRoutes);
app.use('/', programmetvRoutes);
app.use('/',formulaireProgrammetvRoutes);
app.use('/', loginRoutes);
app.use('/',signupRoutes);


// Définition d'une route GET pour "/apropos"
/* app.get("/apropos", (req, res) => {

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
}); */


// Définition d'une route GET pour "/programmetv"
/*app.get("/programmetv", (req, res) => {

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
}); */


/*app.get("/formulaireProgrammetv", (req, res) => {
    const programmetv = [
        { titre: "Sambi tsara"},
        { poste: "Chaldi"},
        { horairedebut: "00:00:00"},
        { horairefin: "06:56:00"}
    ];
    res.render("formulaireProgrammetv", {programme: programmetv});
}); */


app.post("/ajouter-programme", (req, res) => {
    console.log("Corps de la requête:", req.body);

    let { titreMusique, poste, horairedebut, horairefin, lienyoutube, id } = req.body;

    let titreMusiqueId = id && id.trim() !== "" ? id : null;
    let requeteSQL;
    let ordreDonnees;

    if (!titreMusiqueId) {
        requeteSQL = "INSERT INTO programmetv (id, titre_musique, poste, horaire_debut, horaire_fin, lienYouTube) VALUES (?,?,?,?,?,?)";
        ordreDonnees = [null, titreMusique, poste, horairedebut, horairefin, lienyoutube];
    } else {
        requeteSQL = "UPDATE programmetv SET titre_musique = ?, poste = ?, horaire_debut = ?, horaire_fin = ?, lienYouTube = ? WHERE id = ?";
        ordreDonnees = [titreMusique, poste, horairedebut, horairefin, lienyoutube, titreMusiqueId];
    }

    req.getConnection((erreur, connection) => {
        if (erreur) {
            console.log(erreur);
        } else {
            connection.query(requeteSQL, ordreDonnees, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Opération réussie == !");
                    res.status(300).redirect("/ajouter-programme"); 
                }
            });
        }
    });
});


/*app.get('/login', (req, res) => {
    res.render('login');  // Cela va chercher le fichier 'login.ejs' dans le dossier 'views'
});

app.post("/login", (req, res) => {
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
            res.render("login", { utilisateur: resultat });
        });
    });
}); */


/*app.get('/signup', (req, res) => {
    res.render('signup');  // Cela va chercher le fichier 'login.ejs' dans le dossier 'views'
});

app.post("/signup", (req, res) => {
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
            res.render("login", { utilisateur: resultat });
        });
    });
}); */





module.exports = app;