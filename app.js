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

// Je précise le moteurde lecture de vues à savoir ejs
app.set("view engine", "ejs");

// précise le répertoire 'public' qui contient les fichiers statics
app.use(express.static("public"));

// rOUTE "/apropos" avec la méthode "GET"
app.get("/programmetv", (req, res) => {
    const programmetitre = [
        { titre: "chigoma" },
        { titre: "manzaraka" },
        { titre: "debat" },
        { titre: "chant" },
        { poste: "programmeur d'émission", horairedebut: "23:00:00", horairefin: "02:00:00" },
        { poste: "camera men", horairedebut: "15:00:00", horairefin: "19:00:00" },
        { poste: "ingénieur", horairedebut: "13:00:00", horairefin: "18:00:00" },
        { poste: "réalisateur", horairedebut: "07:00:00", horairefin: "08:00:00" }
    ];
    res.render("programmetv", { programmes: programmetitre });
});

app.get("/apropos", (req, res) => {
    const equipe = [
        { nom: "Equipe A", poste: "Programmeur d'émission", responsable: "Alice Dupont" },
        { nom: "Equipe B", poste: "Directrice générale", responsable: "Claire Lefevre" },
        { nom: "Equipe C", poste: "Réalisation", responsable: "Marc Bernard" }
    ];

    res.render("apropos", { equipe: equipe });
});




module.exports = app;