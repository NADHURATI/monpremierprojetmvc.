-- Création de la base de données
CREATE DATABASE chainetv;

-- Utilisation de la base de données
USE chainetv;

-- Création de la table 'equipe'
CREATE TABLE equipe (
    INT AUTO_INCREMENT PRIMARY KEY, -- Identifiant unique pour chaque équipe
    nom VARCHAR(255) NOT NULL,  -- Nom de l'équipe
    poste VARCHAR(100), -- Rôle de l'équipe (Ex : Production, Technique, Marketing)
    responsable VARCHAR(255), -- Responsable de l'équipe
    
);

-- Création de la table 'programmediffusion'
CREATE TABLE programmediffusion (
    INT AUTO_INCREMENT PRIMARY KEY, -- Identifiant unique pour chaque programme
    titre_programme VARCHAR(255) NOT NULL, -- Titre du programme
    poste VARCHAR(100) -- Poste ou rôle de l'équipe
    horaire_debut TIME NOT NULL, -- Heure de début du programme
    horaire_fin TIME NOT NULL,  -- Heure de fin du programme
 
);

INSERT INTO equipe (nom, poste, responsable)
VALUES
('Equipe A', 'Programmeur d'émission', 'Alice Dupont'),
('Equipe B', 'Directrice générale', 'Claire Lefevre'),
('Equipe C', 'Réalisateur', 'Marc Bernard'),


INSERT INTO programmediffusion (titre_programme, horaire_debut, horaire_fin,)
VALUES 
('Chigoma','Programmeur d'émission', '23:00:00', '02:00:00'),
('Manzaraka','Camera men', '15:00:00', '19:00:00'),
('Débat', 'Ingénieur', '13:00:00', '18:00:00'),
('Chant', 'Réalisateur', '07:00:00', '08:00:00'),



