const express = require('express');
const router = express.Router();
const livre = require('../controllers/livre.controller');

// Créer un nouveau livre
router.post('/', livre.create);

// Récupérer toutes les livres
router.get('/', livre.findAll);

// Récupérer un seul livre avec id
router.get('/:id', livre.findOne);

// Mettre à jour un livre avec id
router.put('/:id', livre.update);

// Supprimer un livre avec id
router.delete('/:id', livre.delete);

module.exports = router;
