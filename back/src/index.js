const express = require('express');
const cors = require('cors');
const lesroutes = require('./routes/livre.route');
const db = require('./models/livre.model');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialisation de la base de données
db.sequelize.sync()
    .then(() => {
        console.log('Base de données synchronisée');
    })
    .catch((err) => {
        console.error('Erreur lors de la synchronisation de la base de données:', err);
    });

// Routes
app.use('/api/livre', lesroutes);

// Route de base
app.get('/api', (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API de gestion de livres' });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
