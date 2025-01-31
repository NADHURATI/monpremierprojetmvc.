/// ici, import du frameword ExpressJS
const express = require("express");
const mysql2 = require("mysql2");
const url = require("url");
const fs = require("fs");
const myConnection = require("express-myconnection");
const connection = require("express-myconnection");

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


app.get("/apropos", (req, res) => {
    req.getConnection((erreur, connection) => {
        if (erreur) {
            console.log("Erreur de connexion à la base de données", erreur);
        }
        connection.query("SELECT * FROM equipe", [], (err, resultat) => {
            if (err) {
                console.log("Erreur lors de l'exécution de la requête :", err);
            }
            console.log("Données récupérées :", resultat);
            // Assurez-vous que 'resultat' est bien passé sous le nom 'equipes' dans la vue
            res.render("apropos", { equipes: resultat });
        });
    });
});


app.get("/programmetv", (req, res) => {
    req.getConnection((erreur, connection) => {
        if (erreur) {
            console.log("Erreur de connexion à la base de données", erreur);
        }
        connection.query("SELECT * FROM programmediffusion", (err, resultat) => {
            if (err) {
                console.log("Erreur lors de l'exécution de la requête :", err);
            }
            console.log("Données récupérées :", resultat);
            // Passer les données correctement à la vue
            res.render("programmetv", { emissions: resultat });
        });
    });
});

   




module.exports = app;