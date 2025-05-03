# Présentation
Gestionnaire de Livres est une application web qui permet de gérer facilement une collection de livres grâce aux fonctionnalités complètes du CRUD (Créer, Lire, Mettre à jour, Supprimer). Elle a été développée avec React pour l’interface utilisateur (frontend), Node.js pour le serveur (backend), et utilise Docker pour la création d’images et la gestion des conteneurs.

✨ Fonctionnalités

📋 Gestion complète des livres : ajout, liste, modification, suppression

🧰 Technologies utilisées

Docker,
React.js,
Node.js,
Sequelize,
MySQL et
Postman : pour pouvoir tester les api

Docker 
    - Avec des fichiers Dockerfile pour construire les images et un 
      Docker-compose.yml pour faire l'orchestration. Dans ce dernier
      on a les services front, back, db et phpmyadmin 

# Structure du projet
/back
/front
/db
/docker-compose.yml
/README.md

# Créé l'application front avec la commande

npx create-react-app front

# Créé l'application back avec l'utilisation de Sequelize comme ORM

Ajouter les fichiers nécessaire tout en respectant le modele MVC

# Créé un dossier db avec un fichier init.sql pour la création de la base de donnée et des tables

# Lancer les conteneurs avec la commande 
docker-compose up

L'application front sera accessible à l'adresse http://localhost:3000
L'application back sera accessible à l'adresse http://localhost:3001
Et phpMyAdmin sera accessible à l'adresse http://localhost:8080/



📝 Utilisation
Connexion à l'application
Accédez à l'application via l'adresse http://localhost:3000 et vous serez directement redirigé
vers la page d'accueil parcqu'on a pas eu le temps de terminé la partie authentification

Ajouter un livre

Tout a été simplifié sur une seule page 
Remplissez le formulaire avec les détails du livre
Cliquez sur "Ajouter"
En dessous du formulaire on a la liste des livres ajoutés avec les actions à mener modifier ou supprimer
Sur la même page vous pouvez modifier ou supprimer un livre

# API Documentation

L'API est accessible à l'adresse http://localhost:3001/api lorsque le serveur est en cours d'exécution.

Urls principaux :

GET /api/livre - Récupérer tous les livres
POST /api/livre - Ajouter un nouveau livre
PUT /api/livre/:id - Modifier un livre existant
DELETE /api/livre/:id - Supprimer un livre
