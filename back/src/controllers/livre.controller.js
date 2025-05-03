const db = require('../models/livre.model');
const Livre = db.Livre;

// Créer et enregistrer une nouvelle tâche
exports.create = async (req, res) => { 
    try {
        // Valider la requête
        if (!req.body.title) {
            return res.status(400).json({ message: 'Le contenu ne peut pas être vide!' });
        }

        // Créer un livre
        const livre = {
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        };

        // Enregistrer le livre dans la base de données
        const data = await Livre.create(livre);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({
            message: err.message || 'Une erreur est survenue lors de la création du livre.'
        });
    }
};

// Récupérer tous les livres de la base de données 
exports.findAll = async (req, res) => {
    try {
        const data = await Livre.findAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({
            message: err.message || 'Une erreur est survenue lors de la récupération des livres.'
        });
    }
};

// Trouver un livre avec un id
exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Livre.findByPk(id);
        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ message: `Livre avec id=${id} non trouvée.` });
        }
    } catch (err) {
        res.status(500).json({
            message: `Erreur lors de la récupération du livre avec id=${id}`
        });
    }
};

// Mettre à jour un livre par id
exports.update = async (req, res) => {
    const id = req.params.id;

    try {
        const [num] = await Livre.update(req.body, {
            where: { id: id }
        });

        if (num === 1) {
            // Récupérer les données mises à jour pour les renvoyer
            const updatedTask = await Livre.findByPk(id);
            res.json(updatedTask);
        } else {
            res.status(404).json({
                message: `Impossible de mettre à jour le livre avec id=${id}. Livre non trouvée ou req.body est vide!`
            });
        }
    } catch (err) {
        res.status(500).json({
            message: `Erreur lors de la mise à jour du livre avec id=${id}`
        });
    }
};

// Supprimer un livre avec l'id spécifié
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const num = await Livre.destroy({
            where: { id: id }
        });

        if (num === 1) {
            res.json({ message: 'Livre supprimée avec succès!' });
        } else {
            res.status(404).json({
                message: `Impossible de supprimer le livre avec id=${id}. Livre non trouvée!`
            });
        }
    } catch (err) {
        res.status(500).json({
            message: `Impossible de supprimer le livre avec id=${id}`
        });
    }
};
